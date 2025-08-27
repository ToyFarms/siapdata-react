import FeatureCarousel from "@/components/FeatureCarousel";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import { useTranslation } from "react-i18next";

export default function About() {
  const h2Style =
    "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0";

  const { t } = useTranslation();

  return (
    <div className="min-h-[100vh] text-black flex flex-col w-full px-[20%] gap-[5rem] mb-[10rem]">
      <h1 className="font-hero text-[8rem] mt-20 text-center">SiapData</h1>
      <ScreenshotCarousel />

      <section>
        <h2 className={h2Style}>{t("about.about")}</h2>
        <p>{t("about.about.answer")}</p>
      </section>
      <section>
        <h2 className={h2Style}>{t("about.what")}</h2>
        <p>{t("about.what.answer")}</p>
      </section>
      <section>
        <h2 className={`text-center mt-[10rem] mb-10 ${h2Style}`}>
          {t("key-features")}
        </h2>
        <FeatureCarousel />
      </section>
      <section>
        <h2 className={h2Style}>{t("about.why")}</h2>
        {t("about.why.answer")}
      </section>
      <section>
        <h2 className={h2Style}>{t("about.mission")}</h2>
        {t("about.mission.answer")}
      </section>
    </div>
  );
}
