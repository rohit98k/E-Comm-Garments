import "./BreadCrum.css";

const BreadCrum = ({ item }) => {
  return (
    <div className="breadcrum">
      <p>
        Home{">"}Shop{">"}
        {item.category}
        {">"}
        {item.name}
      </p>
    </div>
  );
};

export default BreadCrum;
