{/*  import React from "react";
 import Post from "./pratice/post";
 function App(){
   return <Post />;
 }
 // export default App;
*/}


//for the todo list
{/*import Todo from "./Pratice/todo";

function App() {
  return (
    <div>
      <Todo />
    </div>
  );
}
export default App; */}


// import Portfolio from "./Pratice/portfolio";

// function App() {
//   return <Portfolio />;
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;