import Sc1 from "../assets/sc1.png";
import Sc2 from "../assets/sc2.png";
import Sc3 from "../assets/sc3.png";
import Sc4 from "../assets/sc4.png";
import Sc5 from "../assets/sc5.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

const screenshots = [Sc1, Sc2, Sc3, Sc4, Sc5];

export default function ScreenshotCarousel() {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({ delay: 5000, stopOnInteraction: true }),
        WheelGesturesPlugin(),
      ]}
    >
      <CarouselContent>
        {screenshots.map((s) => (
          <CarouselItem key={s} className="basis-1/3">
            <img src={s} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
