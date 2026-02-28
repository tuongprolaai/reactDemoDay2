import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "./components/Footer";
import Navigation from "../components/Navigation";

function DefaultLayout() {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <div className="container">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default DefaultLayout;
