import { features } from "@/lib/dataFeatures";

import Sc1 from "../assets/sc1.png";
import Sc2 from "../assets/sc2.png";
import Sc3 from "../assets/sc3.png";
import Sc4 from "../assets/sc4.png";
import Sc5 from "../assets/sc5.png";
const screenshots = [Sc1, Sc2, Sc3, Sc4, Sc5];

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ArrowLeft, ChevronsUpDown } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import { Separator } from "@/components/ui/separator";

export function FeatureDescription({ description }: { description: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <Button variant="link" size="sm" className="flex items-center gap-1">
          {open ? "Show less" : "Read more"}
          <ChevronsUpDown
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p>{description}</p>
      </CollapsibleContent>
    </Collapsible>
  );
}
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LinkTop from "@/components/LinkTop";

export default function Features() {
  const hStyle =
    "scroll-m-[50vh] border-b mb-2 text-2xl font-semibold tracking-tight first:mt-0 w-fit";

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 900px)" });
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (location.state?.fromIndex !== undefined) {
      const featureIndex = location.state.fromIndex;
      const featureId = features[featureIndex]?.title
        .replaceAll(" ", "-")
        .toLowerCase();
      const element = document.getElementById(featureId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [location.state]);

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="p-8 lg:p-24">
      {features.map((f, i) => (
        <div key={i}>
          {i !== 0 ? <Separator className="mt-12 mb-12" /> : null}

          <div
            id={f.title.replaceAll(" ", "-").toLowerCase()}
            className={`flex ${isDesktopOrLaptop ? "items-center" : ""} ${
              i % 2 === 1 ? "flex-row-reverse" : "flex-row"
            } relative`}
          >
            <div className="flex-1 hidden sm:block">
              <img
                className="min-w-[15rem] rounded-xl"
                src={screenshots[i % screenshots.length]}
                alt={`${t(f.titleKey)} screenshot`}
              />
            </div>

            <div className="flex flex-2 flex-col m-8 lg:m-24">
              <h1 className={hStyle}>{t(f.titleKey)}</h1>
              <p>{t(f.depthKey)}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="w-full flex justify-center mt-12 mb-24">
        <LinkTop to={{ pathname: "/pricing" }} className="flex gap-4">
          <p className="underline">{t("hero.learn-pricing")}</p>
        </LinkTop>
      </div>

      {location.state?.from ? (
        <Button
          onClick={handleBack}
          className="fixed z-50 bottom-4 right-4 md:bottom-8 md:right-8 inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm text-sm hover:shadow-xl active:scale-95 transition-transform animate-pulse cursor-pointer"
        >
          <ArrowLeft />
          {t("back")}
        </Button>
      ) : null}
    </div>
  );
}
