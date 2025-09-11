import { useTranslation } from "react-i18next";

export default function Contact() {
  const hStyle =
    "scroll-m-20 border-b mb-2 text-lg font-semibold tracking-tight first:mt-0 w-fit";
  const { t } = useTranslation();

  return (
    <div className="max-w-48 flex flex-col gap-4">
      <div>
        <h1 className={hStyle}>{t("foot.location")}</h1>
        <p className="text-sm">
          Jl. Suma, RT.02/RW.02, Majalengka Kulon, Kec. Majalengka, Kabupaten
          Majalengka, Jawa Barat 45418
        </p>
      </div>
      <div>
        <h1 className={hStyle}>{t("foot.contact")}</h1>
        <p className="text-sm">satriyo@siapschool.com</p>
        <p className="text-sm">+6289646544043</p>
      </div>
    </div>
  );
}
