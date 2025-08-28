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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

import Autoplay from "embla-carousel-autoplay";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function FeatureCarousel() {
  const { t } = useTranslation();

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000 }), WheelGesturesPlugin()]}
    >
      <CarouselContent>
        {features.map((f, i) => {
          const slug = f.title.replaceAll(" ", "-").toLowerCase();
          return (
            <CarouselItem
              key={f.title + f.description}
              className="basis-1/1 sm:basis-1/2"
            >
              <Link
                key={f.title + i}
                to={`/features#${slug}`}
                state={{
                  from: location.pathname + location.search,
                  fromIndex: i,
                }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{t(f.titleKey)}</CardTitle>
                    <CardDescription>{t(f.descriptionKey)}</CardDescription>
                    <CardAction>{f.icon}</CardAction>
                  </CardHeader>
                  <CardFooter className="flex gap-2 justify-end">
                    <p className="text-sm text-gray-500 underline">More info</p>
                    <ExternalLink size={18} />
                  </CardFooter>
                </Card>
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
