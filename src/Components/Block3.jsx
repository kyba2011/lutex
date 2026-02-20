import { useState } from "react";
import Card from "./card";

function Block3() {
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const api = [
    {
      name: "Поплин",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/card-img.png",
    },
    {
      name: "Хлопок",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/card-img.png",
    },
    {
      name: "Сатин",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/card-img.png",
    },
    {
      name: "Бязь",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/card-img.png",
    },
    {
      name: "Лён",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/card-img.png",
    },
    {
      name: "Поплин",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/card-img.png",
    },
    {
      name: "Хлопок",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/card-img.png",
    },
    {
      name: "Сатин",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/card-img.png",
    },
    {
      name: "Бязь",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/card-img.png",
    },
    {
      name: "Лён",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/card-img.png",
    },
    {
      name: "Поплин",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/card-img.png",
    },
    {
      name: "Хлопок",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/card-img.png",
    },
  ];

  const materials = ["Поплин", "Хлопок", "Сатин", "Бязь", "Лён"];

  const handleMaterialClick = (material) => {
    if (selectedMaterial === material) {
      setSelectedMaterial(null);
    } else {
      setSelectedMaterial(material);
    }
  };

  const filteredApi =
    selectedMaterial === null
      ? api
      : api.filter((item) => item.name === selectedMaterial);

  return (
    <div
      id="catalog"
      data-bg="white"
      data-header-theme="light"
      className="w-full max-w-[1440px] mx-auto py-12 lg:py-16"
    >
      <h1 className="text-3xl lg:text-4xl xl:text-5xl text-teal-light font-semibold text-center mb-8 lg:mb-10 px-4">
        УЮТНАЯ СПАЛЬНЯ
      </h1>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-6 my-8 lg:my-10 text-sm lg:text-base text-teal-light font-semibold px-4">
        {materials.map((material) => (
          <p
            key={material}
            onClick={() => handleMaterialClick(material)}
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
      <div className="flex justify-center py-12 lg:py-16 px-4 lg:px-8 xl:px-20">
        <div className="flex flex-wrap gap-4 lg:gap-5 xl:gap-6 justify-center lg:justify-start max-w-full">
          {filteredApi.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Block3;
