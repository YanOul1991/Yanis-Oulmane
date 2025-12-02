import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({behavior: 'smooth'});
        }
      }, 0)
    }
  }, [hash])

  return null;
}

export default function App() {
  const navList = [
    {
      title: "Jeux",
      path: '/#games',
    },
    {
      title: "3D",
      path: "/#model",
    },
    {
      title: "Web",
      path: "/#web",
    }
  ];

  const socialsList = [
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/yanis-oulmane"
    },
    {
      title: "Github",
      link: "https://github.com/YanOul1991"
    }
  ]
  
  return (
    <>
      <BrowserRouter basename="/Yanis-Oulmane/">
        <Header nav={navList} socials={socialsList} />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}