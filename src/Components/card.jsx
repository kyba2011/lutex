import { Heart, ShoppingCart } from "lucide-react";

function Card({ data }) {
  return (
    <a href="">
      <div className="max-w-100 xl:max-w-102.5 w-full rounded-[10px] pb-2 p-px text-[#3E3232] bg-white ">
        <img src="/card-img.png" alt="" className="w-full rounded-t-[10px]" />
        <div className="flex justify-between w-full items-center pl-1.5 p-4">
          <h3 className="text-[22px] font-bold">{data.name}</h3>
          <p className="text-[16px] font-normal">{data.name2}</p>
        </div>
        <div className="flex justify-between items-center bg-[#F5F5F5] py-2.75 px-4 mx-1 rounded-xl">
          <div className="flex justify-start items-center gap-3.5">
            {data.visit.map((item, index) => (
              <p key={index} className="text-sm">
                {item}
              </p>
            ))}
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
