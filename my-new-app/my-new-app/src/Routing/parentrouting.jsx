import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

// import Home from "./home.jsx";
import DataFile from "./datafile.jsx";
import About from "./about.jsx";
// import Contact from "./contact.jsx";

const ParentRouting = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/datafile?name=Harsh&regno=1234567">Data</Link>
          </div>

          <div>
            <Link to="/about"state={{companyName: "Tech Solutions",locationComp: "Bangalore",work: "Software Engineer",}}>About</Link>
          </div>
          <div>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/datafile" element={<DataFile />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/contact" element={<Contact />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ParentRouting;
