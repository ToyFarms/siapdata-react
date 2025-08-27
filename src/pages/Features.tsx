import { features } from "@/lib/features";

import Sc1 from "../assets/sc1.png";
import Sc2 from "../assets/sc2.png";
import Sc3 from "../assets/sc3.png";
import Sc4 from "../assets/sc4.png";
import Sc5 from "../assets/sc5.png";
const screenshots = [Sc1, Sc2, Sc3, Sc4, Sc5];

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
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
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Features() {
  const hStyle =
    "scroll-m-[50vh] border-b mb-2 text-2xl font-semibold tracking-tight first:mt-0 w-fit";

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 900px)" });
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    if (window.history.length > 1) {
      navigate(-1);
    } else if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate("/");
    }
  }, [navigate, location.state]);

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
            <div className="flex-1">
              <img
                className="min-w-[15rem] rounded-xl"
                src={screenshots[i % screenshots.length]}
                alt={`${f.title} screenshot`}
              />
            </div>

            <div className="flex flex-2 flex-col m-8 lg:m-24">
              <h1 className={hStyle}>{f.title}</h1>

              {isDesktopOrLaptop ? (
                <p>{f.depth}</p>
              ) : (
                <FeatureDescription description={f.depth} />
              )}
            </div>
          </div>
        </div>
      ))}

      {location.state?.from ? (
        <Button
          onClick={handleBack}
          className="fixed z-50 bottom-4 right-4 md:bottom-8 md:right-8 inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg backdrop-blur-sm text-sm hover:shadow-xl active:scale-95 transition-transform animate-pulse cursor-pointer"
        >
          ← Back
        </Button>
      ) : null}
    </div>
  );
}
