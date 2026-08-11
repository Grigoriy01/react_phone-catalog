import { Product } from "../shared/types";

export function sortByYear (products: Product[] | null): Product[] | null {
  if (!products) {
    return null
  }

  return products.sort((productA, productB) => productB.year - productA.year)
}
