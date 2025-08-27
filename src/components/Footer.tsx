import Map from "../assets/map-layer.png";
import Logo from "../assets/logo.png";
import LinkTop from "./LinkTop";
import Contact from "./Contact";
import { pagesLinks } from "./PagesLinks";

export default function Footer() {
  const hStyle =
    "scroll-m-20 border-b mb-2 text-lg font-semibold tracking-tight first:mt-0 w-fit";

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
        <div className="flex-1 ml-15 mt-15">
          <img className="hidden sm:block max-w-[12rem]" src={Logo} />
        </div>
        <div className="flex-1">
          <p className={hStyle}>Links</p>
          <ul className="flex flex-3 flex-col">
            {pagesLinks.map((p) => (
              <li key={p.to + p.label}>
                <LinkTop to={p.to}>{p.label}</LinkTop>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-2">
          <Contact />
        </div>
      </div>
      <p className="pt-5 pb-5 w-full text-center text-md border-t border-t-white/20">
        Copyright ©2025 SiapData by PT. Fokus Solusi Teknologi. All Rights
        Reserved.
      </p>
    </div>
  );
}
