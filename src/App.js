import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Display from "./components/Display";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Display />
        <Routes>
          <Route path='/' />
        </Routes>
      </BrowserRouter>
    </>
  );
}