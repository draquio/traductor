import { useContext, useRef } from "react";
import { TranslateContext } from "../../context/TranslateContext";
import { LanguageContext } from "../../context/LanguageContext";
import "./ResultBox.scss";
import { AiOutlineCopy } from 'react-icons/ai';

const Resultbox = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { translateState } = useContext(TranslateContext);
  const { languageState } = useContext(LanguageContext);
  const language = languageState.word;
  const CopyTextArea = () => {
    if (translateState.text != "") {
      navigator.clipboard.writeText(translateState.text);
    }
  }
  return (
    <div className="result_box_container">
      <textarea
      ref={textareaRef}
        className="result_box"
        disabled
        placeholder={language}
        value={translateState.text}
      />
      <AiOutlineCopy className="copy_text_area" onClick={CopyTextArea} />
    </div>
  );
};
export default Resultbox;
