import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
    <div className="py-16">
      <div className="max-w-266 w-full min-h-166.5 bg-teal-dark/8 rounded-[20px] py-10 px-14 m-auto">
        <h2 className="text-center text-teal-dark text-5xl font-semibold mb-10">
          ХИТЫ ПРОДАЖ
        </h2>

        <div className="flex flex-col items-center gap-8">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex gap-6 -ml-6">
              {api.map((item, index) => (
                <div key={index} className="pl-6 shrink-0 basis-1/2">
                  <div className="relative">
                    <Card data={item} img="/card-img.png" />  
                    <div className="absolute top-4 right-10  font-[Inter] bg-[#D9B46C] text-white pl-4.75 pr-3.25 py-3 text-[30px] font-semibold shadow-lg">
                      Осталось {item.have} товара
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={scrollPrev}
              className="bg-teal-dark hover:bg-teal-light rounded-xl p-3 shadow-lg transition-all"
            >
              <FaArrowLeftLong className="w-5 h-5 text-white" />
            </button>

            <button
              onClick={scrollNext}
              className="bg-teal-dark hover:bg-teal-light rounded-xl p-3 shadow-lg transition-all"
            >
              <FaArrowRightLong className="w-5 h-5 font-extralight text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block4;
