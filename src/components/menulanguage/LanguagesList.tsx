import { Dropdown, DropdownProps  } from "semantic-ui-react";
import "semantic-ui-css/components/dropdown.min.css";
import "semantic-ui-css/components/transition.min.css";
import "semantic-ui-css/components/reset.min.css";
import LanguagesListMocks from "../../mocks/languages.json"
import { MapLanguages } from "../../utils/function";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export const LanguagesList = () => {
  const { getLanguage } = useContext(LanguageContext);
  const CountryListLanguages = MapLanguages(LanguagesListMocks);
  const SelectLanguage = (_: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
    if (typeof data.value === 'string') {
      getLanguage(data.value, "translation");
    }
  }
  return <Dropdown placeholder="Idioma" fluid search selection className="clase_depruebaa" defaultValue='en' options={CountryListLanguages} onChange={SelectLanguage} />;
};
