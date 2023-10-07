import { useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./MenuLanguage.scss";

export const MenuLanguage = () => {
  const { getLanguage, languageState } = useContext(LanguageContext);
  const [language, setLanguage] = useState(languageState.lan);
  const handleClick = (lang: string = "EN", word: string = "Translation") => {
    setLanguage(lang);
    getLanguage(lang, word);
  };
  return (
    <div className="languages_container">
      <p className="language_title">Traducir a:</p>
      <p
        className={`language ${language === "EN" ? "active" : ""}`}
        onClick={() => {
          handleClick("EN", "Translation");
        }}
      >
        Inglés
      </p>
      <p
        className={`language ${language === "ES" ? "active" : ""}`}
        onClick={() => {
          handleClick("ES", "Traducción");
        }}
      >
        Español
      </p>
      <p
        className={`language ${language === "FR" ? "active" : ""}`}
        onClick={() => {
          handleClick("FR", "Traduction");
        }}
      >
        Francés
      </p>
      <p
        className={`language ${language === "IT" ? "active" : ""}`}
        onClick={() => {
          handleClick("IT", "Traduzione");
        }}
      >
        Italiano
      </p>
    </div>
  );
};
