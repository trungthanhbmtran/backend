import { gql } from 'apollo-server';

export default gql`
  scalar Date

  input ImageInput {
    name: String!
    value: String!
  }

  input DefaultVariantInput {
    type: String!
    style: String!
    color: ColorLibInput!
    size: String!
    price: Int!
    images: [ImageInput]!
  }

  input SizeInput {
    name: String!
    price: Int!
  }

  input ColorInput {
    name: String!
    hex: String!
    sizes: [SizeInput]!
    images: [ImageInput]!
  }

  input ColorLibInput {
    name: String!
    hex: String!
  }

  input StyleInput {
    name: String!
    colors: [ColorInput]!
  }

  input VariantInput {
    type: String!
    styles: [StyleInput]!
  }

  type Image {
    name: String!
    value: String!
  }

  type DefaultVariant {
    type: String!
    style: String!
    color: ColorLib!
    size: String!
    price: Int!
    images: [Image]!
  }

  type Size {
    name: String!
    price: Int!
  }

  type Color {
    name: String!
    hex: String!
    sizes: [Size]!
    images: [Image]!
  }

  type ColorLib {
    name: String!
    hex: String!
  }

  type Style {
    name: String!
    colors: [Color]!
  }

  type Variant {
    type: String!
    styles: [Style]!
  }

  type Product {
    id: ID!
    href: String!
    title: String!
    tags: [String]!
    design: String!
    source: String!
    platform: String!
    createdAt: Date!
    defaultV: DefaultVariant!
    variants: [Variant]!
  }

  extend type Query {
    product(href: String!): Product!
    products(skip: Int!, limit: Int!): [Product!]!
    productsCount: Int!
  }

  extend type Mutation {
    createProduct(title: String!, tags: [String]!, design: String!, source: String!, platform: String!, createdAt: Date!, defaultV: DefaultVariantInput!, variants: [VariantInput]!): Product!
  }
`;