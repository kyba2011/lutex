import { FaTelegram } from "react-icons/fa6";
import { FaVk } from "react-icons/fa";

import { Link, useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCatalogClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("catalog");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById("catalog");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="bg-teal-light text-white pt-10 lg:pt-12.5 pb-5 px-4 lg:px-8 xl:px-20 flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto gap-8 lg:gap-0 min-h-[300px] lg:h-75">
      <div className="flex flex-col justify-between text-[#D9B46C] ">
        <img src="/logo.svg" alt="" className="w-44" />
        <p className="text-[14px] w-56">Политика конфиденциальности</p>
      </div>
      <div className="leading-3.25 flex flex-col justify-start text-sm lg:text-base font-semibold space-y-4 lg:space-y-6.25 lg:ml-40 xl:ml-55">
        <p>
          <Link to="/">Главная</Link>
        </p>
        <p>
          <a href="#catalog" onClick={handleCatalogClick}>
            Каталог
          </a>
        </p>
        <p>
          <Link to="/sale">Распродажа</Link>
        </p>
        <p>
          <Link to="/reviews">Отзывы</Link>
        </p>
        <p>
          <Link to="/contacts">Контакты</Link>
        </p>
      </div>
      <div className="lg:ml-40 xl:ml-55.5 space-y-4 lg:space-y-5 flex flex-col justify-start">
        <p className="w-37">lubim-textil@mail.ru</p>
        <div className="flex gap-5">
          <a href="https://vk.com/">
            <FaVk className="w-6 h-6 text-white" />
          </a>

          <a href="https://telegram.org/">
            <FaTelegram className="w-5.75 h-5.75 text-white" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-start lg:items-end justify-between text-[#D9B46C] lg:ml-auto gap-4">
        <p className="border-[1.5px] border-[#D9B46C] py-2.5 px-5 rounded-full font-semibold text-[20px]">
          +7 905 342-70-61
        </p>
        <p className="text-[14px]">Пользовательское соглашение</p>
      </div>
    </div>
  );
}

export default Footer;
