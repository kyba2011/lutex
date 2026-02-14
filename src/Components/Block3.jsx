import { useState } from "react";
import Card from "./card";

function Block3() {
  const [selectedMaterial, setSelectedMaterial] = useState("Все");

  const api = [
    { name: "Поплин", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { name: "Хлопок", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { name: "Сатин", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { name: "Бязь", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { name: "Лён", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { name: "Поплин", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { name: "Хлопок", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { name: "Сатин", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { name: "Бязь", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { name: "Лён", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { name: "Поплин", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { name: "Хлопок", name2: "zima", visit: ["1sp", "2sp", "euro"] },
  ];

  const materials = ["Все", "Поплин", "Хлопок", "Сатин", "Бязь", "Лён"];

  const filteredApi =
    selectedMaterial === "Все"
      ? api
      : api.filter((item) => item.name === selectedMaterial);

  return (
    <div data-bg="white" data-header-theme="light" className="w-ful py-16">
      <h1 className="text-5xl text-teal-light font-semibold text-center mb-10">
        УЮТНАЯ СПАЛЬНЯ
      </h1>
      <div className="flex justify-center space-x-6 my-10 leading-3.25 text-[16px] text-teal-light font-semibold">
        {materials.map((material) => (
          <p
            key={material}
            onClick={() => setSelectedMaterial(material)}
            className={`cursor-pointer transition-colors ${
              selectedMaterial === material
                ? "text-[#D9B46C]"
                : "hover:text-[#D9B46C]"
            }`}
          >
            - {material}
          </p>
        ))}
      </div>
      <div className="flex justify-center py-16 px-20">
        <div className="flex flex-wrap gap-6 justify-start">
          {filteredApi.map((item, index) => (
            <Card key={index} data={item} img="/card-img.png" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Block3;
