import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { features } from "../lib/features";
import { useMediaQuery } from "react-responsive";
import FeatureCarousel from "@/components/FeatureCarousel";
import { Link, useLocation } from "react-router-dom";

export default function FeatureList() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 900px)" });
  const location = useLocation();

  return isDesktopOrLaptop ? (
    <div className="w-full px-10 mt-10">
      <div className="flex flex-wrap justify-center gap-10">
        {features.map((f, i) => {
          const slug = f.title.replaceAll(" ", "-").toLowerCase();
          return (
            <Link
              key={f.title + i}
              to={`/features#${slug}`}
              state={{
                from: location.pathname + location.search,
                fromIndex: i,
              }}
            >
              <Card className="min-w-[20rem]">
                <CardHeader>
                  <CardTitle>{f.title}</CardTitle>
                  <CardDescription>{f.description}</CardDescription>
                  <CardAction>{f.icon}</CardAction>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  ) : (
    <div className="w-full px-[4rem] mt-10">
      <FeatureCarousel />
    </div>
  );
}
