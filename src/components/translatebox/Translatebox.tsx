import { FormEvent, ChangeEvent, useState, useContext } from "react";
import Translate from "../../services/Translate";
import "./Translatebox.scss";
import { TranslateContext } from "../../context/TranslateContext";
import { LanguageContext } from "../../context/LanguageContext";

const Translatebox: React.FC = () => {
  const { getTranslate } = useContext(TranslateContext);
  const { languageState } = useContext(LanguageContext);
  const language = languageState.lan;
  
  const [text, SetText] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const translate = new Translate();
    try {
      const response = await translate.translatetext(text, language);
      getTranslate(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    SetText(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
    <textarea placeholder="Agregar Texto" onChange={handleChange} />
    <button type="submit">
      Traducir
    </button>
  </form>
  );
};

export default Translatebox;
