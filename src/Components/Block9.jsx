import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

function Block9() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Сергей",
      text: "",
      rating: 5,
    },
    {
      name: "Анна",
      text: "",
      rating: 5,
    },
    {
      name: "Михаил",
      text: "",
      rating: 5,
    },
    {
      name: "Елена",
      text: "",
      rating: 5,
    },
    {
      name: "Дмитрий",
      text: "",
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= reviews.length - 3 ? prev : prev + 1));
  };

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-20 py-24"
      data-bg="white"
      id="rewiews"
    >
      <h2 className="text-[43px] font-semibold text-teal-light uppercase tracking-wider text-center mb-12">
        Отзывы
      </h2>

      <div className="overflow-hidden mb-12">
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (413 + 20)}px)`,
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-beige rounded-[10px] p-8 flex flex-col gap-8 shrink-0"
              style={{ width: "413px", height: "420px" }}
            >
              <div className="flex flex-col gap-2.5">
                <h3 className="text-xl font-bold text-dark">{review.name}</h3>
                <div className="flex gap-1.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow text-yellow" />
                  ))}
                </div>
              </div>
              <p className="text-lg font-medium text-dark leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-5">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="w-14 h-14 bg-teal-light rounded-xl flex items-center justify-center hover:bg-teal-dark transition-colors disabled:opacity-80 disabled:cursor-not-allowed"
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= reviews.length - 3}
          className="w-14 h-14 bg-teal-light rounded-xl flex items-center justify-center hover:bg-teal-dark transition-colors disabled:opacity-80 disabled:cursor-not-allowed"
          aria-label="Следующий отзыв"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
}

export default Block9;
