import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  addToCart,
  removeFromCart,
  isInCart,
  addToFavorites,
  removeFromFavorites,
  isInFavorites,
} from "../utils/cart";
import { getProductById } from "../data/products";

function Card({ id }) {
  const data = getProductById(id);

  if (!data) return null;

  const img = data.img || "/card-img.png";
  const [inCart, setInCart] = useState(false);
  const [inFavorites, setInFavorites] = useState(false);

  useEffect(() => {
    setInCart(isInCart(data.id));
    setInFavorites(isInFavorites(data.id));
  }, [data.id]);

  const generateUrl = () => {
    const nameUrl = data.name.replace(/\s+/g, "-").replace(/\//g, "-");
    const name2Url = data.name2
      ? data.name2.replace(/\s+/g, "-").replace(/\//g, "-")
      : "";
    const id = data.id || "1";

    const fullName = name2Url
      ? `${nameUrl}--${name2Url}--${id}`
      : `${nameUrl}--${id}`;
    return `/about/${fullName}`;
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inCart) {
      removeFromCart(data.id);
      setInCart(false);
    } else {
      addToCart(data.id);
      setInCart(true);
    }
  };

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inFavorites) {
      removeFromFavorites(data.id);
      setInFavorites(false);
    } else {
      addToFavorites(data.id);
      setInFavorites(true);
    }
  };

  return (
    <Link to={generateUrl()}>
      <div className="max-w-85 xl:max-w-90 2xl:max-w-102.5 w-full rounded-[10px] pb-2 p-px text-gray-dark bg-white h-91.2 5">
        <img
          data-bg="dark"
          src={img}
          alt=""
          className="w-full rounded-t-[10px]"
        />
        <div
          data-bg="white"
          className="flex justify-between w-full items-center pl-1.5 p-4"
        >
          <h3 className="text-[22px] font-bold">{data.name}</h3>
          <p className="text-[16px] font-normal">{data.name2}</p>
        </div>
        <div className="flex justify-between items-center bg-gray-light py-2.75 px-4 mx-1 rounded-xl">
          <div className="flex justify-start items-center gap-3.5">
            {data.visit.map((item, index) => {
              const hasNotHave = String(item).includes("-nh");
              const displayText = String(item).replace("-nh", "").trim();

              return (
                <p
                  key={index}
                  className={`text-sm ${
                    hasNotHave ? "text-gray-medium" : "text-gray-dark"
                  }`}
                >
                  {displayText}
                </p>
              );
            })}
          </div>
          <div className="flex gap-1.5">
            <button onClick={handleFavoriteClick}>
              <Heart
                className={`w-4.5 h-4.5 transition-all ${
                  inFavorites ? "fill-gold text-gold" : "text-gold"
                }`}
              />
            </button>
            <button onClick={handleCartClick}>
              <ShoppingCart
                className={`w-4.5 h-4.5 transition-all ${
                  inCart ? "fill-gold text-gold" : "text-gold"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
