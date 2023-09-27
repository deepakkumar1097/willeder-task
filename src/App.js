import Navbar from "./components/Navbar";
import Body from "./pages/Body";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Square from "./pages/Square";
import WhatWeDo from "./pages/WhatWeDo";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Body />
      <WhatWeDo />
      <Square />
      <Footer />
    </div>
  );
}

export default App;
