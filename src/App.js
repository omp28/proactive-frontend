import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Lifestyle from "./components/Lifestyle/Lifestyle";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Lifestyle />
    </div>
  );
}

export default App;
