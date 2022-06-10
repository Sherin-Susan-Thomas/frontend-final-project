import React from "react";
import { Header } from "components/header/Header";
import { TopBar } from "components/topbar/TopBar";
import "./home.css";
import { SideBar } from "components/sidebar/Sidebar";

export const HomePage = () => {
  return (
    <>
      <TopBar />
      <Header />

      <div className="home">
        <SideBar />
      </div>
    </>
  );
};
