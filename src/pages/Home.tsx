import HeroImage from "../assets/sc5.png";
import HeroImage2 from "../assets/sc2.png";
import HeroImage3 from "../assets/sc3.png";
import HomeBackground from "../assets/home-bg.png";
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import FeatureList from "../components/FeatureList";
import Faq from "@/components/Faq";
import { Separator } from "@/components/ui/separator";
import Testmonials from "@/components/Testmonials";
import Screenshots from "./Screenshots";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LinkTop from "@/components/LinkTop";

function Image() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("in").then(() => {
      controls.start("idle");
    });
  }, [controls]);
  return (
    <>
      <motion.img
        src={HeroImage}
        className="w-[70%] rounded-[2rem] absolute origin-bottom"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { y: 100, scale: 0.6 },
          in: {
            y: 0,
            scale: 1,
            transition: { duration: 2, ease: [0, 0.95, 0.32, 1] },
          },
          idle: {
            y: [0, -5, 0],
            transition: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            },
          },
        }}
        viewport={{ once: true }}
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ x: "50%", y: "20%", rotate: "10deg", opacity: 100 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: [0.75, -0.03, 0, 0.99] }}
        src={HeroImage2}
        className="w-[50%] z-[-1] rounded-[2rem] absolute origin-bottom blur-[3px]"
      />
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ x: "-50%", y: "20%", rotate: "-10deg", opacity: 100 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: [0.75, -0.03, 0, 0.99] }}
        src={HeroImage3}
        className="w-[50%] z-[-1] rounded-[2rem] absolute origin-bottom blur-[3px]"
      />
    </>
  );
}

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-[calc(100vh-6rem)]">
      <img
        src={HomeBackground}
        className="absolute z-[-1] h-[103vh] translate-y-[-6rem] w-auto object-cover hue-rotate-[-20deg]"
      />
      <div className="flex flex-col h-full items-center justify-center">
        <p className="font-hero text-white text-[4rem] md:text-[5rem] xl:text-[6rem] text-balance leading-none text-center md:text-left md:ml-[5rem] md:self-start">
          Siap Data
        </p>
        <p className="font-hero bg-gradient-to-b text-transparent from-sky-50 to-sky-200 bg-clip-text text-[1.5rem] md:text-[1.8rem] lg:text-[2.5rem] text-balance leading-none text-center md:text-left md:ml-[5rem] md:self-start">
          {t("hero.title")}
        </p>
        <p className="text-white text-justify [text-align-last:center] md:[text-align-last:left] mx-10 md:mx-20 md:ml-[5rem] lg:mr-20 mt-[3rem] text-md">
          {t("hero.desc")}
        </p>
        <div className="flex gap-4 md:ml-20 mt-10 lg:mt-20 self-center md:self-start">
          <a
            href="https://play.google.com/store/apps/details?id=com.app.siap.data"
            target="_blank"
          >
            <Button className="text-sm md:text-xl px-5 md:px-10 pt-6 pb-6 md:pt-8 md:pb-8 rounded-xl cursor-pointer">
              {t("download")}
            </Button>
          </a>
          <Link to={{ pathname: "/about" }}>
            <Button
              variant="secondary"
              className="text-sm md:text-xl px-5 md:px-10 pt-6 pb-6 md:pt-8 md:pb-8 rounded-xl cursor-pointer"
            >
              {t("learn-more")}
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative hidden md:flex items-center justify-center max-w-[38rem] ml-[5rem]">
        {Image()}
      </div>
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Hero />
      <div className="mt-[5rem]">
        <Separator className="mt-10 mb-24" />
        <h1 className="text-center text-5xl font-hero mb-20">
          {t("key-features")}
        </h1>
        <FeatureList />
        <Separator className="mt-10 mb-24" />
        <h1 className="text-center text-5xl font-hero mb-20">
          {t("screenshots")}
        </h1>
        <Screenshots />
        <Separator className="mt-10 mb-24" />
        <h1 className="text-center text-5xl font-hero mb-20">
          {t("testmonials")}
        </h1>
        <Testmonials />
        <Separator className="mt-10 mb-24" />
        <h1 className="text-center text-5xl font-hero mb-20">{t("faq")}</h1>
        <Faq />
        <Separator className="mt-10 mb-24" />

        <div className="w-full flex justify-center mb-24">
          <LinkTop to={{ pathname: "/about" }} className="flex gap-4">
            <p className="underline">{t("hero.learn-app")}</p>
          </LinkTop>
        </div>
      </div>
    </div>
  );
}
