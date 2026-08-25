import { BackHeader } from "@/shared/components/BackHeader";
import { BreadcrumbsNav } from "@/shared/components/BreadcrumbsNav";
import { useParams } from "react-router-dom";
import { useProductDetails } from "./Hook";

import './ProductDetailsPage.scss';


export const ProductDetailsPage = () => {
const {productId, category} = useParams<{productId: string, category: string}>();
const {isLoading, hasError, loadData, product} = useProductDetails(productId, category)

  return (
    <section className="product-details-page container">
      <BreadcrumbsNav productName={product?.name} />
      <BackHeader catalogName={product?.name} />
    </section>

  );
};
