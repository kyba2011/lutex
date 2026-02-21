import { Link } from "react-router-dom";
import Card from "../card";
import "./Sale.css";

function Sale() {
  return (
    <div data-bg="white" className="divul">
      <ul>
        <li className="breadcrumb-home-group">
          <Link to="/" className="breadcrumb-link">
            Главная
          </Link>
          <span className="breadcrumb-separator">/</span>
        </li>
        <li style={{ color: "#10545B" }}>Распродажа</li>
      </ul>

      <div className="sale-content">
        <div data-bg="dark" className="sale-grid ">
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
