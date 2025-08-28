import Map from "../assets/map-layer.png";
import Logo from "../assets/logo.png";
import LinkTop from "./LinkTop";
import Contact from "./Contact";
import { useTranslation } from "react-i18next";
import { pagesLinks } from "@/lib/dataLinks";

export default function Footer() {
  const hStyle =
    "scroll-m-20 border-b mb-2 text-lg font-semibold tracking-tight first:mt-0 w-fit";
  const { t } = useTranslation();

  return (
    <div
      id="footer"
      className="relative overflow-hidden flex flex-col justify-between items-center bg-gradient-to-br from-primary to-blue-500 text-white min-h-[10rem] z-[-2]"
    >
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-overlay pointer-events-none z-10"
        src={Map}
      />
      <div className="flex justify-center items-center w-full">
        <div className="flex-1 sm:mx-8 sm:mt-15 px-8">
          <img className="sm:max-w-48" src={Logo} />
        </div>
        <div className="hidden sm:block flex-1">
          <p className={hStyle}>{t("foot.links")}</p>
          <ul className="flex flex-3 flex-col">
            {pagesLinks.map((p) => (
              <li key={p.to + p.label}>
                <LinkTop to={p.to}>{t(p.labelKey)}</LinkTop>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center sm:justify-start flex-2 mt-12 mb-12">
          <Contact />
        </div>
      </div>
      <p className="pt-5 pb-5 w-full text-center text-sm sm:text-md border-t border-t-white/20">
        Copyright ©2025 SiapData by PT. Fokus Solusi Teknologi. All Rights
        Reserved.
      </p>
    </div>
  );
}
