import "./App.css";
import Languages from "./components/Experience/Languages";
import Navbar from "./components/Navbar";
import Hero2 from "./components/Hero2";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="skeleton">
      <Navbar />
      <Hero2 />
      <About />
      <Languages />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
