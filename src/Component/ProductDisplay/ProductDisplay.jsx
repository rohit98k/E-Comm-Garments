import "./ProductDisplay.css";
import start_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartStore";

const ProductDisplay = ({ item }) => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(
      cartActions.addTocart({
        item,
      })
    );
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={item.image} alt="" />
          <img src={item.image} alt="" />
          <img src={item.image} alt="" />
          <img src={item.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={item.image} className="productdiaplay-main-img" alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{item.name}</h1>
        <div className="productdiaplay-right-stars">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(200)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${item.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${item.new_price}
          </div>
        </div>
        <div className="productdiaplay-right-discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nostrum
          ad veniam temporibus eos pariatur dolorum modi esse a, consequatur
          suscipit expedita architecto totam recusandae dolor dolorem cumque est
          commodi!
        </div>
        <div className="productdiaplay-right-size">
          <h1>Select Size</h1>
          <div className="productdiaplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => handleClick(item)}>Add To Cart</button>
        <p className="productdiaplay-right-category">
          <span>Category: </span>Women, T-Shirt, Crop Top
        </p>
        <p className="productdiaplay-right-category">
          <span>Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
