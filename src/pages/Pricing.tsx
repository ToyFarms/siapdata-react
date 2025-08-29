import Pricing from "@/components/sections/pricing/PricingComp";
import { useTranslation } from "react-i18next";

export default function PricingPage() {
  const { t } = useTranslation();

  return (
    <Pricing
      className="mt-24 mb-24"
      title={t("pricing.title")}
      description={t("pricing.desc")}
      plans={[
        {
          name: t("pricing.free"),
          description: t("pricing.free.desc"),
          price: 0,
          priceNote: "",
          cta: {
            variant: "default",
            label: t("pricing.free.label"),
            href: "#",
          },
          className: "outline",
          features: t("pricing.free.features").split("\n"),
        },
        {
          name: t("pricing.starter"),
          description: t("pricing.starter.desc"),
          price: 49,
          priceNote: "",
          cta: {
            variant: "default",
            label: t("pricing.starter.label"),
            href: "#",
          },
          className: "outline",
          features: t("pricing.starter.features").split("\n"),
        },
        {
          name: t("pricing.enterprise"),
          description: t("pricing.enterprise.desc"),
          price: 1299,
          priceNote: "",
          cta: {
            variant: "default",
            label: t("pricing.enterprise.label"),
            href: "#",
          },
          className: "outline",
          features: t("pricing.enterprise.features").split("\n"),
        },
      ]}
    ></Pricing>
  );
}
