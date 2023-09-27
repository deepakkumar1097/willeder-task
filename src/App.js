import Navbar from "./components/Navbar";
import Body from "./pages/Body";
import Hero from "./pages/Hero";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Body />
    </div>
  );
}

export default App;
