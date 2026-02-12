import { useCallback } from "react";
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Card from "./card";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function Block4() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const api = [
    {
      name: "poplin",
      name2: "zima",
      visit: [40, 42, 44, 48, 50, 52, 54],
      have: 3,
    },
    {
      name: "poplin",
      name2: "zima",
      visit: [40, 42, 44, 48, 50, 52, 54],
      have: 5,
    },
    {
      name: "poplin",
      name2: "zima",
      visit: [40, 42, 44, 48, 50, 52, 54],
      have: 2,
    },
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="">
      <div className="max-w-266 w-full min-h-166.5 bg-teal-dark/8 rounded-[20px] py-10 px-14 m-auto">
        <h2 className="text-center text-teal-dark text-5xl font-semibold mb-13">
          ХИТЫ ПРОДАЖ
        </h2>

        <div className="flex flex-col items-center gap-8">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex gap-6 -ml-6">
              {api.map((item, index) => (
                <div key={index} className="pl-6 shrink-0 basis-1/2">
                  <div className="relative">
                    <div className="absolute top-4.25 right-15.75 w-6 h-5.5 rotate-12 -z-10 bg-[#D9B46C]"></div>
                    <Card data={item} img="/card-img.png" /> 

                    <div className="absolute top-5 right-15 tracking-[-5%] leading-[120%] font-[Inter] bg-[#D9B46C] text-white pl-4.75 pr-3.25 py-2.75 text-[26px] font-medium shadow-2xl">
                      Осталось {item.have} товара
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-13">
            <button
              onClick={scrollPrev}
              className="bg-teal-dark hover:bg-teal-light rounded-[20px] py-5.5 px-6 shadow-lg transition-all"
            >
              <MoveLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={scrollNext}
              className="bg-teal-dark hover:bg-teal-light rounded-[20px] py-5 px-5.5 shadow-lg transition-all"
            >
              <MoveRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block4;
