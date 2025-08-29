import Pricing from "@/components/sections/pricing/PricingComp";
import { useTranslation } from "react-i18next";

export default function PricingPage() {
  const { t } = useTranslation();

  return (
    <Pricing
      className="mb-24"
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
          features: t("pricing.free.features").split("\n"),
        },
      ]}
    ></Pricing>
  );
}
