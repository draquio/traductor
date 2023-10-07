// import Footer from "../components/footer/Footer";
import { ReactNode } from "react";
import Nav from "../components/nav/Nav";
import "./Layout.scss";

interface Props {
  children: ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <div className="main">
      <header>
        <Nav />
      </header>
      <div className="container">{children}</div>
    </div>
  );
}
