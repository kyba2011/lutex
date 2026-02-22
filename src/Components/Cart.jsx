import { Link } from "react-router-dom";
import { getCart } from "../utils/cart";
import Card from "./card";

function Cart() {
  const cartIds = getCart();

  return (
    <div data-bg="white" className="max-w-360 mx-auto pt-32 pb-12 px-20">
      <ul className="flex gap-1 leading-[130%] text-[16px] text-[#22537899] hover:text-teal-light font-[Inter] mb-12.5">
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li className="text-[18px]">/</li>
        <li style={{ color: "#10545B" }}>Корзина</li>
      </ul>

      {cartIds.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl text-teal-light mb-4">Корзина пуста</h2>
          <Link to="/" className="text-gold underline">
            Перейти к покупкам
          </Link>
        </div>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {cartIds.map((id) => (
            <Card key={id} id={id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
