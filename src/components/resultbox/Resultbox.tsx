import { useContext, useState, useEffect } from "react";
// import { Form, TextArea } from "semantic-ui-react";
import { TranslateContext } from "../../context/TranslateContext";
import { LanguageContext } from "../../context/LanguageContext";
import "./ResultBox.scss";

const Resultbox = () => {
  const [translatiodefault, setTranslatioDefault] = useState("Translation");

  const { translateState } = useContext(TranslateContext);
  const { languageState } = useContext(LanguageContext);
  const language = languageState.lan;
  useEffect(() => {
    if (language === "ES") {
      setTranslatioDefault("Traducción");
    } else if (language === "EN") {
      setTranslatioDefault("Translation");
    } else {
      setTranslatioDefault("Traduction");
    }
  }, [language]);

  return (
    // <Form>
      <textarea
        className="resultbox"
        disabled
        placeholder={translatiodefault}
        value={translateState.text}
      />
    // </Form>
  );
};
export default Resultbox;
