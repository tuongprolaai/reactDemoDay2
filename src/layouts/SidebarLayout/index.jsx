import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

import styles from "./SidebarLayout.module.scss";
import Navigation from "../components/Navigation";

function SidebarLayout() {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <div className={styles.container}>
        <Sidebar></Sidebar>
        <div className={styles.content}>
          <Outlet></Outlet>
        </div>
        <Sidebar></Sidebar>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default SidebarLayout;
