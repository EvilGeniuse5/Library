import Navbar from "./sections/Navbar";
import HeroSection from "./sections/HeroSection";
import DetailSection from "./sections/DetailSection";

function App() {
  return (
    <div className="App pb-5">
      <Navbar />
      <HeroSection />
      <DetailSection />
      {/* <img src="/img/empty.jpg" alt="img" className="pixel-perfect" /> */}
    </div>
  );
}

export default App;
