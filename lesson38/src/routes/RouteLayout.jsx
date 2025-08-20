import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import ContactPage from "../pages/ContactPage"

export default function RouteLayout() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/about" Component={AboutPage} />
      <Route path="/contact" Component={ContactPage} />
    </Routes>
  );
}
