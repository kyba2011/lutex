import Card from "../card";
import "./Sale.css";

function Sale() {
  const api = [
    {
      name: "Поплин",
      name2: "зима/лето",
      visit: ["1,5 сп", "2 сп", "евро", "дует"],
    },
    { name: "Поплин", name2: "", visit: ["1,5 сп", "2 сп", "евро", "дут"] },
    {
      name: "Сатин",
      name2: "однотонный",
      visit: ["1,5 сп", "2 сп", "евро", "дует"],
    },
    {
      name: "Сатин классический",
      name2: "",
      visit: ["1,5 сп", "2 сп", "евро", "дует"],
    },
    {
      name: "Сатин",
      name2: "зима/лето",
      visit: ["1,5 сп", "2 сп", "евро", "дует"],
    },
    {
      name: "Сатин однотонный",
      name2: "зима/лето",
      visit: ["1,5 сп", "2 сп", "евро", "дует"],
    },
  ];
  return (
    <div data-bg='white' className="divul">
      <ul>
        <li>
          <a href="/">Главная</a>
        </li>
        <li>/</li>
        <li>Распродажа</li>
      </ul>

      <div className="sale-content">
        <div data-bg='dark' className="sale-grid ">
          {api.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sale;
