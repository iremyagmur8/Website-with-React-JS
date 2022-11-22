import Header from "./components/home/header/Header";
import Footer from "./components/home/Footer";
import { useEffect, useState, React } from "react";

import HomePages from "./components/home/pageContent/HomePages";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Blog from "./components/home/blog/Blog";
import About from "./components/home/about/About";
import Skill from "./components/home/Skill";
import Service from "./components/home/services/Service";

function App() {
  const [data, setData] = useState([]);

useEffect(() => {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePages data={data}/>} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/about" element={<About data={data}/>} />
          <Route path="/skills" element={<Skill data={data}/>} />
          <Route path="/services" element={<Service data={data}/>} />
          <Route path="/blog" element={<Blog data={data}/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
