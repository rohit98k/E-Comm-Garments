import Item from "../Item/Item";
import "./RelatedProduct.css";
import { useSelector } from "react-redux";

const RelatedProduct = ({ category }) => {
  const { products } = useSelector((store) => store.product);
  const relatedProduct = products.filter((data) => data.category === category);

  return (
    <>
      <div className="top">
        <h1>Related Products</h1>
        <hr />
      </div>
      <div className="relatedProduct">
        <div className="relatedProduct-item">
          {relatedProduct.map((item, i) => {
            return <Item key={i} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default RelatedProduct;
