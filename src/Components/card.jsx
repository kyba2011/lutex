import { Heart, ShoppingCart } from "lucide-react";

function Card({ data }) {
  const img = data.img || "/card-img.png";

  return (
    <a href="">
      <div className="max-w-85 xl:max-w-90 2xl:max-w-102.5 w-full rounded-[10px] pb-2 p-px text-[#3E3232] bg-white h-91.2 5">
        <img src={img} alt="" className="w-full rounded-t-[10px]" />
        <div className="flex justify-between w-full items-center pl-1.5 p-4">
          <h3 className="text-[22px] font-bold">{data.name}</h3>
          <p className="text-[16px] font-normal">{data.name2}</p>
        </div>
        <div className="flex justify-between items-center bg-[#F5F5F5] py-2.75 px-4 mx-1 rounded-xl">
          <div className="flex justify-start items-center gap-3.5">
            {data.visit.map((item, index) => {
              const hasNotHave = String(item).includes("-nh");
              const displayText = String(item).replace("-nh", "").trim();

              return (
                <p
                  key={index}
                  className={`text-sm ${
                    hasNotHave ? "text-[#939393]" : "text-[#3E3232]"
                  }`}
                >
                  {displayText}
                </p>
              );
            })}
          </div>
          <div className="flex gap-1.5">
            <a href="">
              <Heart className="text-[#D9B46C] w-4.5 h-4.5" />
            </a>
            <a href="">
              <ShoppingCart className="text-[#D9B46C] w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
