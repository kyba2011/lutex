import React from "react";

function Block8() {
  return (
    <div className="flex gap-24 px-14 py-10">
      <div className="flex flex-col gap-10 w-138.25">
        <h2 className="text-teal-dark text-[43px] font-semibold leading-[130%] tracking-[0.02em] uppercase">
          Оптовая заявка
        </h2>
        <p className="text-teal-dark text-xl font-semibold leading-[136.6%] h-20">
          Пожалуйста, укажите контактный номер и выберите мессенджер, через
          который вам удобно получить ответ.
        </p>
      </div>

      <div className="flex flex-col gap-12 w-157.5">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-5">
            <div className="flex font-[Inter] items-center gap-5 px-4 py-3.5 border border-[#D9B46C] rounded-[14px]">
              <input
                type="text"
                placeholder="ИМЯ"
                className="flex-1 bg-transparent text-[#D9B46C] text-base font-medium uppercase tracking-[0.00625em] leading-[137.5%] outline-none placeholder:text-[#D9B46C]"
              />
            </div>

            <div className="flex font-[Inter] items-center gap-5 px-4 py-3.5 border border-[#D9B46C] rounded-[14px]">
              <input
                type="tel"
                placeholder="ТЕЛЕФОН"
                className="flex-1 bg-transparent text-[#D9B46C] text-base font-medium uppercase tracking-[0.00625em] leading-[137.5%] outline-none placeholder:text-[#D9B46C]"
              />
            </div>

            <div className="flex font-[Inter] items-center gap-5 px-4 py-3.5 border border-[#D9B46C] rounded-[14px]">
              <input
                type="text"
                placeholder="КОММЕНТАРИЙ"
                className="flex-1 bg-transparent \ text-[#D9B46C] text-base font-medium uppercase tracking-[0.00625em] leading-[137.5%] outline-none placeholder:text-[#D9B46C]"
              />
            </div>
          </div>

          <p className="text-teal-dark text-base font-medium leading-[121.3%]">
            Даю своё согласие на обработку персональных данных
          </p>
        </div>

        <button className="flex justify-center items-center gap-5 px-4 py-5 bg-teal-dark rounded-[14px] hover:bg-teal-light transition-all shadow-[inset_0_0_0_1px_#4B9402]">
          <span className="text-white text-2xl font-medium uppercase tracking-[0.004167em] leading-[91.67%]">
            Заказать
          </span>
        </button>
      </div>
    </div>
  );
}

export default Block8;
