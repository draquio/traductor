import { FormEvent, ChangeEvent, useState, useContext } from "react";
import Translate from "../../services/Translate";
import "./Translatebox.scss";
import { TranslateContext } from "../../context/TranslateContext";
import { LanguageContext } from "../../context/LanguageContext";
import { IoMdClose } from "react-icons/io";

import { TbLoader } from "react-icons/tb";
import { MdTranslate } from "react-icons/md";
import { Loader } from "../loader/Loader";

const Translatebox: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { getTranslate } = useContext(TranslateContext);
  const { languageState } = useContext(LanguageContext);
  const language = languageState.lan;
  const [text, SetText] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!text) return;
    const translate = new Translate();
    setIsLoading(true);
    try {
      const response = await translate.translatetext(text, language);
      getTranslate(response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleKeyPress = async (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if(!text) return;
      const translate = new Translate();
      setIsLoading(true);
      try {
        const response = await translate.translatetext(text, language);
        getTranslate(response);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const CleanTextArea = () => {
    SetText("");
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    SetText(e.target.value);
  };
  return (
    <form className="translate_form" onSubmit={handleSubmit}>
      {isLoading && <Loader />}
      <div className="translate_box">
        <textarea
          aria-label="text_area_translate"
          disabled={isLoading}
          placeholder="Agregar Texto"
          className="text_area_box"
          value={text}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <IoMdClose className="clean_text_area" onClick={CleanTextArea} />
        <button disabled={isLoading} className="translate_button" type="submit">
          <p>
            {isLoading ? (
              <TbLoader className="loading_button" />
            ) : (
              <MdTranslate />
            )}
            Traducir
          </p>
        </button>
      </div>
    </form>
  );
};

export default Translatebox;
