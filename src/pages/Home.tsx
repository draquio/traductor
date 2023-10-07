import Translatebox from "../components/translatebox/Translatebox";
import Resultbox from "../components/resultbox/Resultbox";
import {MenuLanguage} from "../components/menulanguage/MenuLanguage";
import "./Home.scss";
import  {TranslateProvider}  from "../context/TranslateProvider";
const Home: React.FC = () => {
  return (
    <TranslateProvider>
        <MenuLanguage />
      <div className="translate_container">
        <Translatebox />
        <Resultbox />
      </div>
    </TranslateProvider>
  );
};

export default Home;
