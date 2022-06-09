import { TopBar } from "components/topbar/TopBar";
import React from "react";
import { HomePage } from "pages/home/Home";
import { Login } from "pages/login/Login";
import { Register } from "pages/register/Register";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <>
      <TopBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
