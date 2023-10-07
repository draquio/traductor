import { useState } from "react";
import "./MenuLanguage.scss"

export const MenuLanguage = () => {
  const [language, setLanguage] = useState("");
  const handleClick = (lang: string = "EN") => {
    setLanguage(lang);
    console.log(lang);
  };
  return (
    <div className="languages_container">
      <p
        className={`language ${language === "ES" ? "active" : ""}`}
        onClick={() => {
          handleClick("ES");
        }}
      >
        Español
      </p>
      <p
        className={`language ${language === "EN" ? "active" : ""}`}
        onClick={() => {
          handleClick("EN");
        }}
      >
        Inglés
      </p>
      <p
        className={`language ${language === "FR" ? "active" : ""}`}
        onClick={() => {
          handleClick("FR");
        }}
      >
        Frances
      </p>
    </div>
  );
};
