import { Link } from "react-router-dom";
import { getFavorites } from "../utils/cart";
import Card from "./card";

function Favorites() {
  const favoriteIds = getFavorites();

  return (
    <div data-bg="white" className="max-w-360 mx-auto pt-32 pb-12 px-20">
      <ul className="flex items-center gap-2 mb-12 text-base">
        <li className="flex items-center gap-2 group cursor-pointer">
          <Link
            to="/"
            className="transition-colors duration-300 group-hover:text-teal-light"
            style={{ color: "rgba(34, 83, 120, 0.6)" }}
          >
            Главная
          </Link>
          <span
            className="transition-colors duration-300 group-hover:text-teal-light"
            style={{ color: "rgba(34, 83, 120, 0.6)" }}
          >
            /
          </span>
        </li>
        <li className="text-teal-light">Избранное</li>
      </ul>

      {favoriteIds.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl text-teal-light mb-4">Избранное пусто</h2>
          <Link to="/" className="text-gold underline">
            Перейти к покупкам
          </Link>
        </div>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {favoriteIds.map((id) => (
            <Card key={id} id={id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
