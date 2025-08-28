import FeatureCarousel from "@/components/FeatureCarousel";
import LinkTop from "@/components/LinkTop";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const h2Style =
    "scroll-m-20 border-b pb-2 text-2xl sm:text-3xl font-semibold tracking-tight first:mt-0";
  const ansStyle = "text-sm sm:text-[1rem]";

  const { t } = useTranslation();

  return (
    <div className="min-h-[100vh] text-black flex flex-col w-full px-[20%] gap-[5rem]">
      <h1 className="font-hero text-[4rem] sm:text-[8rem] mt-20 text-center">
        SiapData
      </h1>
      <ScreenshotCarousel />

      <section>
        <h2 className={h2Style}>{t("about.about")}</h2>
        <p className={ansStyle}>{t("about.about.answer")}</p>
      </section>
      <section>
        <h2 className={h2Style}>{t("about.what")}</h2>
        <p className={ansStyle}>{t("about.what.answer")}</p>
      </section>
      <section>
        <h2 className={`text-center mt-[10rem] mb-10 ${h2Style}`}>
          {t("key-features")}
        </h2>
        <FeatureCarousel />
      </section>
      <section>
        <h2 className={h2Style}>{t("about.why")}</h2>
        <p className={ansStyle}>{t("about.why.answer")}</p>
      </section>
      <section>
        <h2 className={h2Style}>{t("about.mission")}</h2>
        <p className={ansStyle}>{t("about.mission.answer")}</p>
      </section>

      <div className="w-full flex justify-center mt-12 mb-24">
        <LinkTop to={{ pathname: "/features" }} className="flex gap-4">
          <p className="underline">{t("hero.learn-features")}</p>
        </LinkTop>
      </div>
    </div>
  );
}
