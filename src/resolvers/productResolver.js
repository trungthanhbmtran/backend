import { AuthenticationError } from 'apollo-server';

export default {
  Query: {
    product: async (parent, { href }, { models: { productModel }, me }, info) => {
      //const product = await productModel.findById({ _id: id }).exec();
      const product = await productModel.findOne({ href: href }).exec();
      return product;
    },
    products: async (parent, { skip, limit }, { models: { productModel }, me }, info) => {
      const products = await productModel.find().sort([['createdAt', -1]]).skip(skip).limit(limit).exec();
      return products;
    },
    productsCount: async (parent, args, { models: { productModel }, me }, info) => {
      const count = await productModel.countDocuments().exec();
      return count;
    },
  },
  Mutation: {
    createProduct: async (parent, { title, tags, design, source, platform, createdAt, defaultV, variants }, { models: { productModel }, me }, info) => {
      if (!me) {
        throw new AuthenticationError('You are not authenticated');
      }
      
      const productExist = await productModel.findOne({ source: source }).exec();
      if (productExist == null){
        var i = 0;
        while (true){
          var href = title.toLowerCase().replace(" ", "-") + "-" + i++;
          const productExist = await productModel.findOne({ href: href }).exec();
          if (productExist == null)
            break;
        }

        const product = await productModel.create({ href, title, tags, design, source, platform, createdAt, defaultV, variants});
        return product;
      }
      else{
        return {href: "exist"};
      }
    },
  },
};