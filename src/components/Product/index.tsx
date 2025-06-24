import { FC } from "react";

interface SingleProduct {
  id: number;
  title: string;
  price: number;
}

interface ProductProps {
  product: SingleProduct;
}

const Product: FC<ProductProps> = ({ product }) => {
  return (
    <div>
      {product.title}: {product.price}
    </div>
  );
};

export default Product;
