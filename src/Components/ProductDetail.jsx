import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../data/products";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


function ProductDetail() {
  const { name: urlName } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const parseUrlName = (url) => {
    if (!url) return { name: "Поплин", name2: "зима/лето", id: "1" };

    const parts = url.split("--");

    if (parts.length === 3) {
      return {
        name: parts[0].replace(/-/g, " "),
        name2: parts[1].replace(/-/g, "/"),
        id: parts[2],
      };
    } else if (parts.length === 2) {
      return {
        name: parts[0].replace(/-/g, " "),
        name2: "",
        id: parts[1],
      };
    }

    return { name: url.replace(/-/g, " "), name2: "", id: "1" };
  };

  const parsed = parseUrlName(urlName);
  const productData = getProductById(parsed.id);

  const [selectedSize, setSelectedSize] = useState(
    productData?.sizes?.find((size) => !size.includes("-nh")) ||
      productData?.sizes?.[0] ||
      "",
  );

  if (!productData) {
    return (
      <div className="max-w-360 mx-auto pt-32 pb-12 px-20 text-center">
        <h1 className="text-2xl text-teal-light">Товар не найден</h1>
        <Link to="/" className="text-gold underline mt-4 inline-block">
          Вернуться на главную
        </Link>
      </div>
    );
  }

  const product = productData;

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1,
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div data-bg="white" className="max-w-360 mx-auto pt-32 pb-12 px-20">
      <ul className="flex gap-1 leading-[130%] text-[16px] text-[#22537899] hover:text-teal-light font-[Inter] mb-12.5">
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li className="text-[18px]">/</li>
        <li style={{ color: "#10545B" }}>
          {product.name} {product.name2}
        </li>
      </ul>

      <div className="flex gap-5 items-start">
        <div className="relative w-[738px] h-[461px] shrink-0">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handlePrevImage}
            className="absolute left-5 top-1/2 -translate-y-1/2 w-8 h-8 text-white bg-transparent flex items-center justify-center text-lg transition-all"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 text-white bg-transparent flex items-center justify-center text-lg transition-all"
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="flex flex-col gap-12 flex-1 max-w-[523px]">
          <div className="flex justify-between items-end gap-5">
            <div className="flex gap-3.5">
              {product.sizes.map((size, index) => {
                const hasNotHave = String(size).includes("-nh");
                const displayText = String(size).replace("-nh", "").trim();

                return (
                  <button
                    key={index}
                    className={`text-sm leading-normal font-normal ${
                      selectedSize === size
                        ? "text-teal-light"
                        : hasNotHave
                          ? "text-gray-400"
                          : "text-[rgba(62,50,50,0.66)]"
                    }`}
                    onClick={() => !hasNotHave && setSelectedSize(size)}
                    disabled={hasNotHave}
                  >
                    {displayText}
                  </button>
                );
              })}
            </div>
            <div className="text-5xl font-semibold leading-tight text-teal-light">
              {product.price}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl leading-tight text-teal-light font-normal">
              Материал полотна: {product.material}
            </p>
            <p className="text-xl leading-tight text-teal-light font-normal">
              Цвет: {product.color}
            </p>
            <p className="text-xl leading-tight text-teal-light font-normal">
              Артикул: {product.article}
            </p>
          </div>

          <div className="max-w-[521px]">
            <p className="text-xl leading-tight text-teal-light font-normal">
              Описание: {product.description}
            </p>
          </div>

          <div className="flex gap-5">
            <button className="bg-gold text-white text-lg leading-tight tracking-wider py-5 px-21 rounded-md hover:bg-gold-dark transition-all font-normal">
              В корзину
            </button>
            <button className="bg-light-blue text-gold text-lg font-semibold leading-tight py-5 px-14 rounded-md border border-gold hover:bg-gold hover:text-white transition-all">
              В избранное
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
