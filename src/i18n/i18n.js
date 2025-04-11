import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      name: "Dashboard",
      monitoring: "Monitoring",
      pestControl: "Pest Control",
      irrigation: "Irrigation",
      marketplace: "Marketplace",
    },
  },
  hi: {
    translation: {
      name: "डैशबोर्ड",
      monitoring: "निगरानी",
      pestControl: "कीट नियंत्रण",
      irrigation: "सिंचाई",
      marketplace: "बाजार",
    },
  },
  mr: {
    translation: {
      name: "डॅशबोर्ड",
      monitoring: "निरीक्षण",
      pestControl: "कीटक नियंत्रण",
      irrigation: "सिंचन",
      marketplace: "बाजारपेठ",
    },
  },
  pa: {
    translation: {
      name: "ਡੈਸ਼ਬੋਰਡ",
      monitoring: "ਨਿਗਰਾਨੀ",
      pestControl: "ਕੀਟ ਨਿਯੰਤਰਣ",
      irrigation: "ਸਿੰਚਾਈ",
      marketplace: "ਮਾਰਕੀਟ",
    },
  },
  bn: {
    translation: {
      name: "ড্যাশবোর্ড",
      monitoring: "পর্যবেক্ষণ",
      pestControl: "কীটনিয়ন্ত্রণ",
      irrigation: "সেচ",
      marketplace: "বাজার",
    },
  },
  gu: {
    translation: {
      name: "ડૅશબોર્ડ",
      monitoring: "મોનીટરીંગ",
      pestControl: "કીટ નિયંત્રણ",
      irrigation: "સિંચાઈ",
      marketplace: "બજાર",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
