import React, { FC } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Inspired from "./pages/Inspired/Inspired";

export interface IapplicationsProps {}

const App: FC<IapplicationsProps> = (props) => (
  <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/inspired" element={<Inspired/>}></Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
