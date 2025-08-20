import React from "react";
import { Route, Routes } from "react-router";
import Manage from "./app/Manage";
import Pricing from "./app/pages/Pricing";
import Product from "./app/pages/Product";
import AboutUs from "./app/pages/AboutUs";
import Careers from "./app/pages/Careers";
import Community from "./app/pages/Community";
import GetStarted from "./app/GetStarted";

export default function App() {
  return (
    <div>
      <header className="flex gap-3 m-5 text-center">
        <Manage />
        {/* <Pricing />
        <Product />
        <AboutUs />
        <Careers />
        <Community /> */}
        <Routes>
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Community" element={<Community />} />
        </Routes>
        <GetStarted />
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
