import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./ProductSamplingStyle";
import ProductSampling from "../../../components/services/productSampling/index";
const ProductSamplingPage = React.memo((props) => {
  return (
    <>
      <ProductSampling />
    </>
  );
});

export default withRouter(ProductSamplingPage);
