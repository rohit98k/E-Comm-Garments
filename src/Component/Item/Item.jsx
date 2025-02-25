import "./Item.css";
import { useNavigate } from "react-router-dom";
const Item = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="card main"
      onClick={() => {
        navigate(`/product/${item.id}`), window.scrollTo(0, 0);
      }}
    >
      <img className="card-img-top" src={item.image} alt="Card image cap" />
      <div className="card-body">
        <p className="card-text">{item.name}</p>
        <div className="price">
          <p className="new-price">${item.new_price}</p>
          <p className="old-price">${item.old_price}</p>
        </div>
        <button className="btn btn-primary ">Check Out</button>
      </div>
    </div>
  );
};

export default Item;
