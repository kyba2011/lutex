import { useCallback, useState, useEffect } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Card from "./card";

function Block6() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const newIds = [13, 14, 15, 16, 17];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

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
            disabled={!canScrollPrev}
            className="bg-teal-dark hover:bg-teal-light rounded-[20px] py-5 px-5.5 shadow-lg transition-all disabled:opacity-80 disabled:cursor-not-allowed"
          >
            <MoveLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="bg-teal-dark hover:bg-teal-light rounded-[20px] py-5 px-5.5 shadow-lg transition-all disabled:opacity-80 disabled:cursor-not-allowed"
          >
            <MoveRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden flex-1" ref={emblaRef}>
        <div className="flex gap-6 pr-14">
          {newIds.map((id) => (
            <div key={id} className="shrink-0 w-[calc(33.333%-16px)]">
              <Card id={id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Block6;
