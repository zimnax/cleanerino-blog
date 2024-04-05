/** @jsxImportSource @emotion/react */
import Frame from "../common/Frame";
import SubheadingComponent from "../common/subheadings/SubheadingComponent";
import { products } from "../../../tempData";
import ProductCard from "../common/productCard/ProductCard";
import { css } from "@emotion/react";

const productList = css`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: left;
`;

function NewInComponent() {
  return (
    <Frame>
      <SubheadingComponent text="New In" link="https://www.google.com/" />
      <div css={productList}>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </Frame>
  );
}

export default NewInComponent;
