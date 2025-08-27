import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const fallbackLng = "en";

i18n.use(initReactI18next).init({
  lng: fallbackLng,
  fallbackLng,
  ns: ["translation"],
  defaultNS: "translation",
  interpolation: { escapeValue: false },
  react: { useSuspense: true },
  resources: {},
});

export async function loadLocale(lang: string) {
  if (i18n.hasResourceBundle(lang, "translation")) {
    return;
  }

  const translation = await import(`./locales/${lang}.json`);
  i18n.addResourceBundle(
    lang,
    "translation",
    translation.default ?? translation,
    true,
    true,
  );
}
export default i18n;
