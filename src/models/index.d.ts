import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum ProductCondition {
  USED = "USED",
  LIKENEW = "LIKENEW",
  NEW = "NEW"
}



type EagerProductComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductComments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID?: string | null;
  readonly likes?: number | null;
  readonly replies?: string | null;
  readonly text?: string | null;
  readonly productss?: (ProductsProductComments | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductComments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID?: string | null;
  readonly likes?: number | null;
  readonly replies?: string | null;
  readonly text?: string | null;
  readonly productss: AsyncCollection<ProductsProductComments>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductComments = LazyLoading extends LazyLoadingDisabled ? EagerProductComments : LazyProductComments

export declare const ProductComments: (new (init: ModelInit<ProductComments>) => ProductComments) & {
  copyOf(source: ProductComments, mutator: (draft: MutableModel<ProductComments>) => MutableModel<ProductComments> | void): ProductComments;
}

type EagerProducts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Products, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly images?: string | null;
  readonly title?: string | null;
  readonly bidding_price_min?: number | null;
  readonly bidding_price_current?: number | null;
  readonly buy_now_price?: number | null;
  readonly description?: string | null;
  readonly condition?: ProductCondition | keyof typeof ProductCondition | null;
  readonly ProductComments?: (ProductsProductComments | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProducts = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Products, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly images?: string | null;
  readonly title?: string | null;
  readonly bidding_price_min?: number | null;
  readonly bidding_price_current?: number | null;
  readonly buy_now_price?: number | null;
  readonly description?: string | null;
  readonly condition?: ProductCondition | keyof typeof ProductCondition | null;
  readonly ProductComments: AsyncCollection<ProductsProductComments>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Products = LazyLoading extends LazyLoadingDisabled ? EagerProducts : LazyProducts

export declare const Products: (new (init: ModelInit<Products>) => Products) & {
  copyOf(source: Products, mutator: (draft: MutableModel<Products>) => MutableModel<Products> | void): Products;
}

type EagerProductsProductComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductsProductComments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productCommentsId?: string | null;
  readonly productsId?: string | null;
  readonly productComments: ProductComments;
  readonly products: Products;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductsProductComments = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductsProductComments, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productCommentsId?: string | null;
  readonly productsId?: string | null;
  readonly productComments: AsyncItem<ProductComments>;
  readonly products: AsyncItem<Products>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductsProductComments = LazyLoading extends LazyLoadingDisabled ? EagerProductsProductComments : LazyProductsProductComments

export declare const ProductsProductComments: (new (init: ModelInit<ProductsProductComments>) => ProductsProductComments) & {
  copyOf(source: ProductsProductComments, mutator: (draft: MutableModel<ProductsProductComments>) => MutableModel<ProductsProductComments> | void): ProductsProductComments;
}