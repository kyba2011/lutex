import { useState } from "react";
import Card from "./card";

function Block5() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const api = [
    {
      name: "Халаты",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/halat.png",
    },
    {
      name: "Сорочки",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/halat.png",
    },
    {
      name: "Пижамы",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/halat.png",
    },
    {
      name: "Туники",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/halat.png",
    },
    {
      name: "Толстовки",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/halat.png",
    },
    {
      name: "Спортивные костюмы",
      name2: "zima",
      visit: ["1sp", "2sp", "euro"],
      img: "/halat.png",
    },
  ];

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  const filteredApi =
    selectedCategory === null
      ? api
      : api.filter((item) => item.name === selectedCategory);

  return (
    <div
      data-bg="dark"
      className="w-full max-w-[1440px] mx-auto px-8 lg:px-12 xl:px-20 mt-16 lg:mt-20 xl:mt-25"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
        <div className="flex-1 max-w-[400px]">
          <h2 className="text-3xl lg:text-4xl xl:text-[42px] font-semibold text-teal-light leading-[130%] tracking-[2%]">
            ЛЮБИМЫЙ ТРИКОТАЖ
          </h2>
          <div className="flex text-teal-light mt-6 lg:mt-8 xl:mt-10 mb-8 lg:mb-10 xl:mb-12.5 font-semibold text-sm lg:text-base leading-tight gap-8 lg:gap-12 xl:gap-16">
            <div className="flex flex-col space-y-3 lg:space-y-4 xl:space-y-5">
              <p
                onClick={() => handleCategoryClick("Халаты")}
                className={`cursor-pointer transition-colors ${
                  selectedCategory === "Халаты"
                    ? "text-[#D9B46C]"
                    : "hover:text-[#D9B46C]"
                }`}
              >
                — Халаты
              </p>
              <p
                onClick={() => handleCategoryClick("Сорочки")}
                className={`cursor-pointer transition-colors ${
                  selectedCategory === "Сорочки"
                    ? "text-[#D9B46C]"
                    : "hover:text-[#D9B46C]"
                }`}
              >
                — Сорочки
              </p>
              <p
                onClick={() => handleCategoryClick("Пижамы")}
                className={`cursor-pointer transition-colors ${
                  selectedCategory === "Пижамы"
                    ? "text-[#D9B46C]"
                    : "hover:text-[#D9B46C]"
                }`}
              >
                — Пижамы
              </p>
            </div>
            <div className="flex flex-col space-y-3 lg:space-y-4 xl:space-y-5">
              <p
                onClick={() => handleCategoryClick("Туники")}
                className={`cursor-pointer transition-colors ${
                  selectedCategory === "Туники"
                    ? "text-[#D9B46C]"
                    : "hover:text-[#D9B46C]"
                }`}
              >
                — Туники
              </p>
              <p
                onClick={() => handleCategoryClick("Толстовки")}
                className={`cursor-pointer transition-colors ${
                  selectedCategory === "Толстовки"
                    ? "text-[#D9B46C]"
                    : "hover:text-[#D9B46C]"
                }`}
              >
                — Толстовки
              </p>
              <p
                onClick={() => handleCategoryClick("Спортивные костюмы")}
                className={`cursor-pointer transition-colors whitespace-nowrap ${
                  selectedCategory === "Спортивные костюмы"
                    ? "text-[#D9B46C]"
                    : "hover:text-[#D9B46C]"
                }`}
              >
                — Спортивные костюмы
              </p>
            </div>
          </div>
          <Card
            data={{
              name: "Трикотаж",
              name2: "zima",
              visit: ["1sp", "2sp", "euro"],
              img: "/halat.png",
            }}
          />
        </div>
        <img
          src="/block5.png"
          className="w-full lg:w-auto lg:flex-1 lg:max-w-150 xl:max-w-175 h-auto object-cover"
          alt=""
        />
      </div>

      <div className="flex justify-center py-12 lg:py-16 px-4 lg:px-8 xl:px-20">
        <div className="flex flex-wrap gap-4 lg:gap-5 xl:gap-6 justify-center xl:justify-start">
          {filteredApi.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Block5;
