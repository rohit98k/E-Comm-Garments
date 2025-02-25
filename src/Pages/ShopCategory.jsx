import "./style/ShopCategory.css";
import { useSelector } from "react-redux";
import Item from "../Component/Item/Item";
import banner_kids from "../Component/Assets/banner_kids.png";
import banner_mens from "../Component/Assets/banner_mens.png";
import banner_womens from "../Component/Assets/banner_women.png";
const ShopCategory = ({ category }) => {
  const { products } = useSelector((store) => store.product);
  const new_Product = products.filter((data) => data.category == category);
  let banner;
  if (category == "men") {
    banner = banner_mens;
  } else if (category == "women") {
    banner = banner_womens;
  } else if (category == "kid") {
    banner = banner_kids;
  }
  return (
    <div className="new-collection">
      <img src={banner} className="banner" alt="" />
      <h1>{category.toUpperCase()} COLLECTIONS</h1>
      <hr />

      <div className="collections">
        {new_Product.map((item, i) => {
          return <Item key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ShopCategory;

// <h1>{category.toUpperCase()} COLLECTIONS</h1>
// <img src={banner} alt="" />
// <hr />

// <div className="collections">
//   {new_Product.map((item, i) => {
//     return <Item key={i} item={item} />;
//   })}
// </div>
