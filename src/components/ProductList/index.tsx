import { FC } from "react";
import Product from "../Product";

interface Product {
  id: number;
  title: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
