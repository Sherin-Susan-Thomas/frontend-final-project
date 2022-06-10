import React from "react";

import { Header } from "components/header/header";
import { TopBar } from "components/topbar/topBar";

import "./home.css";
import { SideBar } from "components/sidebar/sidebar";
import { Posts } from "components/posts/posts";
export const HomePage = () => {
  return (
    <>
      <div className="home">
        <TopBar />
        <Header />

        <Posts />
        <SideBar />
      </div>
    </>
  );
};
