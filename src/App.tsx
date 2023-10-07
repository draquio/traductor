import "./App.scss";
import WebRouter from "./router/WebRouter";
import { BrowserRouter } from "react-router-dom";
// import "semantic-ui-css/semantic.min.css";
function App() {
  return (
    <BrowserRouter>
      <WebRouter />
    </BrowserRouter>
  );
}

export default App;
