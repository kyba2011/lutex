import { Heart, Phone, ShoppingCart } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isDarkSection, setIsDarkSection] = useState(false);
  // Состояние для активного пункта меню (по умолчанию 'ГЛАВНАЯ')
  const [activeItem, setActiveItem] = useState("ГЛАВНАЯ");

  const menuItems = [
    { label: "ГЛАВНАЯ", path: "/" },
    { label: "КАТАЛОГ", path: "/catalog" },
    { label: "РАСПРОДАЖА", path: "/sale" },
    { label: "ОТЗЫВЫ", path: "/reviews" },
    { label: "КОНТАКТЫ", path: "/contacts" },
  ];

  useEffect(() => {
    const updateHeaderColor = () => {
      const sections = document.querySelectorAll("[data-bg]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (scrollY >= sectionTop - 100 && scrollY < sectionBottom - 100) {
          const bgType = section.getAttribute("data-bg");
          setIsDarkSection(bgType === "dark");
        }
      });
    };

    updateHeaderColor();
    window.addEventListener("scroll", updateHeaderColor);

    return () => window.removeEventListener("scroll", updateHeaderColor);
  }, []);

  const textColor = isDarkSection ? "text-white" : "text-[#10545B]";
  // Цвет полоски (золотой, как твои кнопки)
  const underlineColor = "bg-[#D9B46C]";

  return (
    <header
      className={`fixed flex items-center justify-between px-12 md:px-16 lg:px-20 top-0 h-20 max-w-360 w-full border-0 bg-background/95 backdrop-blur-[20px] z-50 transition-colors duration-300 ${textColor}`}
    >
      <img src="/logo.svg" alt="logo" className={`w-44`} />

      <nav>
        <ul className="flex gap-8 font-medium">
          {menuItems.map((item) => (
            <li
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`relative cursor-pointer py-1 transition-opacity hover:opacity-100 group
                ${activeItem === item.label ? "opacity-90" : "opacity-80"}
              `}
              style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.4)" }}
            >
              <Link to={item.path}>{item.label}</Link>
              {/* Полоска (Underline) */}
              <span
                className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${underlineColor}
                ${activeItem === item.label ? "w-full" : "w-0 group-hover:w-full"}
              `}
              ></span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-2">
        <a
          href="#"
          className="flex w-12 h-12 border border-[#D9B46C] text-[#D9B46C] items-center justify-center rounded-xl hover:bg-[#D9B46C] hover:text-white transition-all"
        >
          <ShoppingCart className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="flex w-12 h-12 border border-[#D9B46C] text-[#D9B46C] items-center justify-center rounded-xl hover:bg-[#D9B46C] hover:text-white transition-all"
        >
          <Heart className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="flex w-12 h-12 border border-[#D9B46C] text-[#D9B46C] items-center justify-center rounded-xl hover:bg-[#D9B46C] hover:text-white transition-all"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </header>
  );
}

export default Header;
