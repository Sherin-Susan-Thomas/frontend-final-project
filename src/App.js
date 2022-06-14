import React from "react";
import { HomePage } from "pages/home/Home";
import { Login } from "pages/login/Login";
import { Register } from "pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Single } from "pages/single/Single";
import { Write } from "pages/write/Write";
import { Profile } from "pages/profile/Profile";

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
          <Route path="/users/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
