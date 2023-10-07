import { useContext } from "react";
import { Form, TextArea } from "semantic-ui-react";
import { TranslateContext } from "../../context/TranslateContext";
import "./ResultBox.scss";

const Resultbox = () => {


  const { translateState } = useContext(TranslateContext);
  return (
    <Form>
      <TextArea
        className="resultbox"
        disabled
        placeholder="Translation"
        value={translateState.text}
      />
    </Form>
  );
};
export default Resultbox;
