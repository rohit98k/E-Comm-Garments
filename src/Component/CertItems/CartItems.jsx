import "./CartItems.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import remove_icon from "../Assets/cart_cross_icon.png";
import { cartActions } from "../../store/cartStore";

const CartItems = () => {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const [qtyMap, setQtyMap] = useState(new Map());
  const [productMap, setProductMap] = useState(new Map());

  useEffect(() => {
    let newQtyMap = new Map();
    let newProductMap = new Map();
    let newTotalPrice = 0;

    cart.forEach((item) => {
      const productId = item.item.id;
      const product = item.item;

      // Update quantity map
      if (newQtyMap.has(productId)) {
        newQtyMap.set(productId, newQtyMap.get(productId) + 1);
      } else {
        newQtyMap.set(productId, 1);
      }

      // Update product map
      if (!newProductMap.has(productId)) {
        newProductMap.set(productId, product);
      }

      newTotalPrice += Number(item.item.new_price);
    });

    // Update state variables
    setQtyMap(newQtyMap);
    setProductMap(newProductMap);
    setTotalPrice(newTotalPrice);
  }, [cart]);

  const handleClick = (id) => {
    dispatch(cartActions.removeToCart(id));
  };

  return (
    <div className="cartitems">
      <div className="cartitems-formet-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {Array.from(productMap.values()).map((data) => (
        <div key={data.id}>
          <div className="cartitems-formet cartitems-formet-main">
            <img
              src={data.image}
              alt={data.name}
              className="cartitem-product-icon"
            />
            <p>{data.name}</p>
            <p>${data.new_price}</p>
            <button className="cartitems-quantaty">
              {qtyMap.get(data.id)}
            </button>
            <p>${data.new_price * qtyMap.get(data.id)}</p>
            <img
              src={remove_icon}
              className="cart-items-remove-icons"
              alt="Remove"
              onClick={() => handleClick(data.id)}
            />
          </div>
          <hr />
        </div>
      ))}
      <div className="cartitems-down">
        <div className="cartitem-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitem-totalitem">
              <p>SubTotal</p>
              <p>${totalPrice}</p>
            </div>
            <hr />
            <div className="cartitem-totalitem">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-totalitem">
              <h3>Total</h3>
              <h3>${totalPrice}</h3>
            </div>
          </div>
          <button>PROCED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
          <p>If You have a Promo code, Enter it here</p>
          <div className="cartitem-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
