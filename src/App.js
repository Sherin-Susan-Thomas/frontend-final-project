import React from "react";
import { HomePage } from "pages/home/Home";
import { Login } from "pages/login/Login";
import { Register } from "pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Single } from "pages/single/Single";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />

          <Route path="/newpost" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
