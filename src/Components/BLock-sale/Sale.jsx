import { Link } from "react-router-dom";
import Card from "../card";
import "./Sale.css";

function Sale() {
  return (
    <div data-bg="white" className="divul">
      <ul className="flex gap-1 leading-[130%] text-[16px] text-[#22537899] hover:text-teal-light font-[Inter] mb-12.5">
        <li className="">
          <Link to="/" className="">
            Главная
          </Link>
        </li>
        <li className="text-[18px]">/</li>
        <li style={{ color: "#10545B" }}>Распродажа</li>
      </ul>

      <div className="sale-content">
        <div className="sale-grid ">
          <Card id={1} />
          <Card id={2} />
          <Card id={3} />
          <Card id={4} />
          <Card id={5} />
          <Card id={6} />
        </div>
      </div>
    </div>
  );
}

export default Sale;
