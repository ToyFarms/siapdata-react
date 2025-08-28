import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { pagesLinks } from "@/lib/dataLinks";
import useScrollHide from "@/hooks/useScrollHide";

function DesktopNavbar({ textBlack }: { textBlack: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  const textColorClass = textBlack && !scrolled ? "text-black" : "text-white";
  const borderClass =
    textBlack && !scrolled ? "border-b-black/15" : "border-b-white/15";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-[width,height] duration-300 min-w-full
        ${scrolled ? "h-15 bg-black/20 backdrop-blur-sm" : "h-24 bg-transparent"}
        flex justify-between items-center px-6 ${borderClass} ${textColorClass}`}
    >
      <NavigationMenu className="w-full">
        <NavigationMenuList className="flex items-center gap-2 lg:gap-4">
          <NavigationMenuItem className="pr-8">
            <NavLink to={"/"}>
              <img
                src="logo.png"
                alt="logo"
                className={`transition-all duration-300 ml-2 lg:ml-5 xl:ml-20 mr-2 lg:mr-1 xl:mr-15 ${
                  scrolled ? "max-w-[60px]" : "max-w-[80px]"
                } h-auto`}
              />
            </NavLink>
          </NavigationMenuItem>

          {pagesLinks.map((p) => (
            <NavigationMenuItem key={p.to}>
              <NavigationMenuLink asChild>
                <NavLink
                  to={p.to}
                  end={p.end}
                  className="px-4 py-2 rounded transition-colors font-medium text-current !text-lg"
                >
                  {t(p.labelKey)}
                </NavLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex gap-5 items-center">
        <LanguageSwitcher />
        <Button className="px-8 !text-md rounded-lg cursor-pointer">
          {t("sign-up")}
        </Button>
      </div>
    </div>
  );
}

function MobileNavbar({ textBlack }: { textBlack: boolean }) {
  const { scrolled, hidden } = useScrollHide({
    shrinkThreshold: 50,
    upTolerance: 10,
    hideAfter: 100,
  });
  const { t } = useTranslation();

  const textColorClass = textBlack && !scrolled ? "text-black" : "text-white";
  const borderClass =
    textBlack && !scrolled ? "border-b-black/15" : "border-b-white/15";

  return (
    <div
      className={`sticky top-0 z-50 transform transition-transform duration-300 min-w-full
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        ${scrolled ? "h-15 bg-black/20 backdrop-blur-sm" : "h-20 bg-transparent"}
        flex justify-between items-center px-5 pt-2 ${borderClass} ${textColorClass}`}
    >
      <img
        src="logo.png"
        alt="logo"
        className={`transition-all duration-300 ml-2 mr-2 max-w-[60px] h-auto ${
          scrolled ? "max-w-[44px]" : "max-w-[60px]"
        }`}
      />

      <div className="flex flex-row items-center gap-4">
        <LanguageSwitcher />
        <Sheet>
          <SheetTrigger className="cursor-pointer">
            <MenuIcon size={36} className="text-current" />
          </SheetTrigger>

          <SheetContent>
            <NavigationMenu className="items-start pt-10">
              <NavigationMenuList className="flex flex-col items-start">
                {pagesLinks.map((p) => (
                  <NavLink
                    key={p.to + p.label}
                    to={p.to}
                    end={p.end}
                    className="text-xl pl-6 pr-6 pb-6 w-full text-current"
                  >
                    {p.label}
                  </NavLink>
                ))}
                <Button className="ml-6 px-8 !text-md rounded-lg cursor-pointer">
                  {t("sign-up")}
                </Button>
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default function Navbar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const [textBlack, setTextBlack] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    setTextBlack(loc.pathname !== "/");
  }, [loc]);

  return (
    <>
      {isDesktopOrLaptop ? (
        <DesktopNavbar textBlack={textBlack} />
      ) : (
        <MobileNavbar textBlack={textBlack} />
      )}
    </>
  );
}
