import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { features } from "../lib/dataFeatures";
import { useMediaQuery } from "react-responsive";
import FeatureCarousel from "@/components/FeatureCarousel";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";

export default function FeatureList() {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 900px)" });
  const location = useLocation();
  const { t } = useTranslation();

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
                  <CardTitle>{t(f.titleKey)}</CardTitle>
                  <CardDescription>{t(f.descriptionKey)}</CardDescription>
                  <CardAction>{f.icon}</CardAction>
                </CardHeader>
                <CardFooter className="flex gap-2 justify-end">
                  <p className="text-sm text-gray-500 underline">
                    {t("more-info")}
                  </p>
                  <ExternalLink size={18} />
                </CardFooter>
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
