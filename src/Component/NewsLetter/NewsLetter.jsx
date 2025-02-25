import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Suscribe to our Newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Suscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
