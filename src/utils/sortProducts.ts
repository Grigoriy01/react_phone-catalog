import { Product } from "../shared/types";

export function sortByYear (products: Product[] | null): Product[] | null {
  if (!products) {
    return null
  }

  return products.sort((productA, productB) => productB.year - productA.year)
}

export function getProductsWithHotPrices (products: Product[] | null): Product[] | null {
  if (!products) {
    return null;

  }

  const productsWithDiscount = products.filter(product => product.fullPrice !== product.price);

  return productsWithDiscount.sort((productA, productB) => {
    const discountA = productA.fullPrice - productA.price;
    const discountB = productB.fullPrice - productB.price;

    return discountB - discountA;
  })
}
