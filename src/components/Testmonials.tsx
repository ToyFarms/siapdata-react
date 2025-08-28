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
import { useMediaQuery } from "react-responsive";

export default function Testmonials() {
  const { t } = useTranslation();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 500px)",
  });

  return (
    <Carousel
      className="mx-2 min-[500px]:mx-16 lg:mx-24"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000 }), WheelGesturesPlugin()]}
    >
      <CarouselContent className="flex min-w-[24rem]">
        {testmonials.map((ts) => (
          <CarouselItem
            key={ts.review}
            className="basis-1/1 md:basis-1/2 lg:basis-1/3"
          >
            <Card>
              <CardContent className="min-h-[12rem]">
                <p>{t(ts.reviewKey)}</p>
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
      {isDesktopOrLaptop ? (
        <>
          <CarouselNext />
          <CarouselPrevious />
        </>
      ) : null}
    </Carousel>
  );
}
