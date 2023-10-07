import { FormEvent, ChangeEvent, useState, useContext } from "react";
import { Form } from "semantic-ui-react";
import Translate from "../../services/Translate"
import "./Translatebox.scss";
import { TranslateContext } from "../../context/TranslateContext";


const Translatebox: React.FC = () => {
  const { getTranslate } = useContext(TranslateContext);
  const [text,SetText] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const translate = new Translate();
    try {
      const response =  await translate.translatetext(text, "ES");
      getTranslate(response); 
    } catch (error) {
      console.error(error);
      
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    SetText(e.target.value)
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.TextArea placeholder="Agregar Texto" onChange={handleChange} />
      <Form.Button type="submit" primary>
        Traducir
      </Form.Button>
    </Form>
  );
};

export default Translatebox;
