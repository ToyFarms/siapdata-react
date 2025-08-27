import { useMediaQuery } from "react-responsive";
import { Card, CardContent, CardFooter } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import { testmonials } from "@/lib/dataTestmonials";
import { useTranslation } from "react-i18next";

export default function Testmonials() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const { t } = useTranslation();

  return (
    <Carousel
      className="mx-24"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000 }), WheelGesturesPlugin()]}
    >
      <CarouselContent className="flex">
        {testmonials.map((ts) => (
          <CarouselItem
            key={ts.review}
            className={isDesktopOrLaptop ? "basis-1/3" : "basis-1/1"}
          >
            <Card>
              <CardContent className="min-h-[12rem]">
                {t(ts.reviewKey)}
              </CardContent>
              <CardFooter className="flex gap-8">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={ts.author.avatar} />
                </Avatar>
                <div>
                  <p className="font-bold text-lg">{ts.author.name}</p>
                  <p className="text-sm">{t(ts.author.positionKey)}</p>
                </div>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
