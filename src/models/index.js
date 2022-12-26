// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ProductCondition = {
  "USED": "USED",
  "LIKENEW": "LIKENEW",
  "NEW": "NEW"
};

const { ProductComments, Products, ProductsProductComments } = initSchema(schema);

export {
  ProductComments,
  Products,
  ProductsProductComments,
  ProductCondition
};