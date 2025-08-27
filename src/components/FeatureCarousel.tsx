import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { features } from "../lib/features";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Autoplay from "embla-carousel-autoplay";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";

export default function FeatureCarousel() {
  return (
    <Carousel plugins={[Autoplay({ delay: 5000 }), WheelGesturesPlugin()]}>
      <CarouselContent>
        {features.map((f) => (
          <CarouselItem key={f.title + f.description} className="basis-1/2">
            <Card>
              <CardHeader>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.description}</CardDescription>
                <CardAction>{f.icon}</CardAction>
              </CardHeader>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
