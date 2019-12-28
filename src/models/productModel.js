import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  href: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  design: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  defaultV: {
    type: {
      type: String,
      required: true,
    },
    style: {
      type: String,
      required: true,
    },
    color: {
      name: {
        type: String,
        required: true,
      },
      hex: {
        type: String,
        required: true,
      }
    },
    size: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: [{
      name: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      }
    }],
  },
  variants: [{
    type: {
      type: String,
      required: true,
    },
    styles: [{
      name: {
        type: String,
        required: true,
      },
      colors: [{
        name: {
          type: String,
          required: true,
        },
        hex: {
          type: String,
          required: true,
        },
        sizes: [{
          name: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        }],
        images: [{
          name: {
            type: String,
            required: true,
          },
          value: {
            type: String,
            required: true,
          },
        }]
      }]
    }]
  }],
});

const product = mongoose.model('product', productSchema);

export default product;