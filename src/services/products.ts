import { Product } from "../shared/types";

const PRODUCTS_URL =
  '/api/products.json';

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL);

  // keep this delay for testing purpose
  await wait(500);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return (await response.json()) as Product[];
}

export async function getProductDetails(category: string): Promise<Product[]> {
  const response = await fetch(`/api/${category}.json`);

  // keep this delay for testing purpose
  await wait(500);

  if (!response.ok) {
    throw new Error('Failed to fetch product details');
  }

  return (await response.json()) as Product[];
}
