import React from "react";
import Block2 from "./components/block2/Block2";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Block3 from "./Components/Block3";
import Sale from "./Components/BLock-sale/Sale";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Hero />
      <Block2 />
      <Block3 /> */}
      <Sale />
    </div>
  );
}

export default App;
