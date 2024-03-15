import "./MenuLanguage.scss";
import { LanguagesList } from "./LanguagesList";

export const MenuLanguage = () => {
  return (
    <div className="languages_container">
      <p className="language_title">Traducir a:</p>
      <div className="languages_list">
        <LanguagesList />
      </div>
    </div>
  );
};
