import React from "react";
import Styles from "./SidebarMenu.module.css";

function SidebarMenu() {
  return (
    <div className={Styles.container}>
      <span className={Styles.notebook}>📓</span>
    </div>
  );
}

export default SidebarMenu;
