import FeatureCarousel from "@/components/FeatureCarousel";
import LinkTop from "@/components/LinkTop";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import Team from "@/components/Team";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

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
        <h2 className={`mt-[10rem] mb-10 ${h2Style}`}>{t("key-features")}</h2>
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

      <section className="flex flex-col items-center">
        <h2 className={h2Style}>{t("about.team")}</h2>
        <div className="flex flex-col min-[900px]:flex-row mx-0 min-[900px]:gap-8 items-center mb-12">
          <div className="flex relative w-full mb-12 mt-12">
            <img
              className="h-full object-cover rounded-xl min-w-72"
              src="team/rahmat.webp"
            />
            <div className="rounded-xl absolute w-full min-w-72 h-[30%] bottom-0 bg-gradient-to-t from-black to-transparent opacity-50" />
            <div className="absolute left-4 bottom-4">
              <p className=" text-white text-shadow-lg/20 text-4xl font-bold">
                Rachmat Santosa
              </p>
              <p className="text-white text-shadow-lg/20 text-lg">
                Founder &amp; CEO Siap School
              </p>
            </div>
          </div>
          <div>
            <FaQuoteLeft className="mb-4" />
            <span>
              Sebuah perjalanan panjang kami dalam berinovasi mengembangkan
              platform digital pendidikan untuk menjadi sebuah karya anak bangsa
              yang handal.
            </span>
            <br />
            <Separator className="mt-8 mb-8" />
            <span>
              Terimakasih atas dedikasi seluruh tim, kepercayaan clients dan
              partner, hingga bisa terus berkontribusi untuk dunia pendidikan di
              Indonesia menjadi lebih baik.
            </span>
            <FaQuoteRight className="ml-auto mt-4" />
          </div>
        </div>
        <Team />
      </section>

      <div className="w-full flex justify-center mt-12 mb-24">
        <LinkTop to={{ pathname: "/features" }} className="flex gap-4">
          <p className="underline">{t("hero.learn-features")}</p>
        </LinkTop>
      </div>
    </div>
  );
}
