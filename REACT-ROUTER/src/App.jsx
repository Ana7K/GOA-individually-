import React from "react";
import { Route, Routes } from "react-router";
import Header from "./app/Header";
import About from "./app/pages/About";

export default function App() {
  return (
    <div>
      App
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/about" element ={<About/>}/>
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}
