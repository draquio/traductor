import Translatebox from "../components/translatebox/Translatebox";
import Resultbox from "../components/resultbox/Resultbox";
import { MenuLanguage } from "../components/menulanguage/MenuLanguage";
import "./Home.scss";
import { TranslateProvider } from "../context/TranslateProvider";
import { LanguageProvider } from "../context/LanguageProvider";
const Home: React.FC = () => {
  return (
    <LanguageProvider>
      <TranslateProvider>
        <MenuLanguage />
        <div className="translate_container">
          <Translatebox />
          <Resultbox />
        </div>
      </TranslateProvider>
    </LanguageProvider>
  );
};

export default Home;
