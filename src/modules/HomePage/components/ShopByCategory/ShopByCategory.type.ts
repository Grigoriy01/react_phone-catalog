export interface CategoryConfig {
  id: string;
  title: string;
  path: string;
  img: string;
  alt: string;
}

export interface ShopByCategoryProps {
  categoriesCount: {
    phones: number;
    tablets: number;
    accessories: number;
  };
}
