import { useState } from "react";
import Card from "./card";
import { products } from "../data/products";

function Block3() {
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const materials = ["Поплин", "Хлопок", "Сатин", "Бязь", "Лён"];

  const handleMaterialClick = (material) => {
    if (selectedMaterial === material) {
      setSelectedMaterial(null);
    } else {
      setSelectedMaterial(material);
    }
  };

  const filteredProducts =
    selectedMaterial === null
      ? products
      : products.filter((item) => item.material === selectedMaterial);

  return (
    <div
      id="catalog"
      data-bg="white"
      className="w-full max-w-360 mx-auto py-12 lg:py-16"
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
              selectedMaterial === material ? "text-gold" : "hover:text-gold"
            }`}
          >
            - {material}
          </p>
        ))}
      </div>
      <div className="flex justify-center py-12 lg:py-16 px-4 lg:px-8 xl:px-20">
        <div
          data-bg="dark"
          className="flex flex-wrap gap-4 lg:gap-5 xl:gap-6 justify-center lg:justify-start max-w-full"
        >
          {filteredProducts.map((item) => (
            <Card key={item.id} id={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Block3;
