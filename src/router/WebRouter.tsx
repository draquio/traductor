import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";

// Define tipos para los componentes Layout y Home
type LayoutType = React.FC<{ children: React.ReactNode }>;
type PageType = React.FC;

const WebRouter: React.FC = () => {
  // Especifica los tipos para los argumentos Layout y Home
  const loadLayout = (Layout: LayoutType, Page: PageType) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>
      {/* Utiliza los componentes Layout y Home correctamente */}
      <Route path="/" element={loadLayout(Layout, Home)} />
    </Routes>
  );
};

export default WebRouter;
