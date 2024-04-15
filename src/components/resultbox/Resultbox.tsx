import { useContext, useRef } from "react";
import { TranslateContext } from "../../context/TranslateContext";
import { LanguageContext } from "../../context/LanguageContext";
import "./ResultBox.scss";
import { IoMdVolumeHigh, IoIosCopy } from "react-icons/io";
import { toast } from "sonner";

const Resultbox = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { translateState } = useContext(TranslateContext);  
  const { languageState } = useContext(LanguageContext);
  const language = languageState.word;
  const CopyTextArea = () => {
    if (translateState.text != "") {
      toast.success('Copiado!',{
        duration:2000,
      });
      navigator.clipboard.writeText(translateState.text);
    }
  };
  const speakText = () => {
    if (window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(translateState.text);
      utterance.lang = languageState.lan;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="result_box_container">
      <div className="result_box">
        <textarea 
          aria-label="result_box"
          ref={textareaRef}
          className="text_area_box_result"
          disabled
          placeholder={language}
          value={translateState.text}
        />
      </div>
      <IoIosCopy className="copy_text_area" onClick={CopyTextArea} />
      <IoMdVolumeHigh className="copy_text_area icon_micro" onClick={speakText}/>
    </div>
  );
};
export default Resultbox;
