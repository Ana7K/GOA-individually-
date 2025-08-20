import React from "react";
import { Outlet, Route, Routes } from "react-router";
import Header from "./app/Header";
import AboutLayout from "./app/layout/AboutLayout";
import Contact from "./app/pages/Contact";

export default function App() {
  return (
    <div>
      App
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/about" element ={<AboutLayout/>}/>
          <Route index element = {<div>about</div>}/>
          <Route path = "create" element={<div>create<Outlet/></div>}>
            <Route path="settings" element={<div>settings</div>}/>
          </Route>
          <Route path="post" element={<div>post</div>}></Route>
          <Route path="/contacts" element={<Contact/>}/>
          <Route path="/contacts/:id" Component={Contact}/>
          <Route path="*" element={<div>error 404 not found</div>}/>
        </Routes>
      </main>
      <footer>footer</footer>
    </div>
  );
}
