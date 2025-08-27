import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { features } from "../lib/dataFeatures";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Autoplay from "embla-carousel-autoplay";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import { useTranslation } from "react-i18next";

export default function FeatureCarousel() {
  const { t } = useTranslation();

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000 }), WheelGesturesPlugin()]}
    >
      <CarouselContent>
        {features.map((f) => (
          <CarouselItem key={f.title + f.description} className="basis-1/2">
            <Card>
              <CardHeader>
                <CardTitle>{t(f.titleKey)}</CardTitle>
                <CardDescription>{t(f.descriptionKey)}</CardDescription>
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
