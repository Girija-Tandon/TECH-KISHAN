import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/language-selector.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <div className="language-selector">
      <select onChange={(e) => i18n.changeLanguage(e.target.value)} value={i18n.language}>
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
        <option value="mr">मराठी</option>
        <option value="pa">ਪੰਜਾਬੀ</option>
        <option value="bn">বাংলা</option>
        <option value="gu">ગુજરાતી</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
