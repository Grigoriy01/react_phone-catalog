import React from "react";
import { ProductCard } from "../ProductCard";
import { Product } from "@/shared/types";

type Props = {
  products: Product[];
}

export const ProductList: React.FC<Props> = ({products}) => {
  return (
    {products(product => (
        <ProductCard product={product} key={product.id} />
      ))}
  );
};
