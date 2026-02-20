import { useCallback } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Card from "./card";

function Block6() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const api = [
    {
      name: "poplin",
      name2: "zima",
      visit: ["40", "42 -nh", "44 -nh", "48-nh", "50", "52-nh", "54-nh"],
      have: 3,
      img: "/card-img.png",
    },
    {
      name: "poplin",
      name2: "zima",
      visit: ["40", "42", "44", "48", "50 -nh", "52", "54"],
      have: 5,
      img: "/card-img.png",
    },
    {
      name: "poplin",
      name2: "zima",
      visit: ["40 -nh", "42", "44", "48", "50 -nh", "52", "54"],
      have: 2,
      img: "/card-img.png",
    },
    {
      name: "poplin",
      name2: "zima",
      visit: ["40", "42", "44", "48", "50", "52", "54"],
      have: 4,
      img: "/card-img.png",
    },
    {
      name: "poplin",
      name2: "zima",
      visit: ["40", "42 -nh", "44", "48", "50", "52 -nh", "54"],
      have: 6,
      img: "/card-img.png",
    },
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex gap-6 pl-14">
      <div className="flex flex-col items-start justify-between min-w-fit">
        <h1 className="text-teal-dark text-5xl font-semibold">НОВИНКИ</h1>
        <div className="flex gap-4">
          <button
            onClick={scrollPrev}
            className="bg-teal-dark hover:bg-teal-light rounded-[20px] w-14 h-14 flex items-center justify-center shadow-lg transition-all"
          >
            <MoveLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={scrollNext}
            className="bg-teal-dark hover:bg-teal-light rounded-[20px] w-14 h-14 flex items-center justify-center shadow-lg transition-all"
          >
            <MoveRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden flex-1" ref={emblaRef}>
        <div className="flex gap-6">
          {api.map((item, index) => (
            <div key={index} className="shrink-0 w-[calc(33.333%-16px)]">
              <Card data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Block6;
