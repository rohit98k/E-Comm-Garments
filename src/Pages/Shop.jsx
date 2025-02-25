import "./style/Shop.css";
import Hero from "../Component/Hero/Hero";
import Offers from "../Component/Offers/Offers";
import Popular from "../Component/Popular/Popular";
import "./style/Shop.css";
import NewCollections from "../Component/NewCollections/NewCollection";
import NewsLetter from "../Component/NewsLetter/NewsLetter";
const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </>
  );
};

export default Shop;
