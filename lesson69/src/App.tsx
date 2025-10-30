import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Features from "./components/Features.tsx";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Hero.tsx";
import Navbar from "./components/Navbar.tsx";
import Story from "./components/Story.tsx";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
