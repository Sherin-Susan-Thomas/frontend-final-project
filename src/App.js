import React from "react";
import { HomePage } from "pages/home/home";
import { Login } from "pages/login/login";
import { Register } from "pages/register/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Single } from "pages/single/single";
import { Write } from "pages/write/write";
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/newpost" element={<Write />} />
          <Route path="/post/:id" element={<Single />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
