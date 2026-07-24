import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Person from "../components/Person/Profile";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

const Home = () => {
  return (
    <div
      className="
    min-h-screen
    bg-white
    text-gray-900
    dark:bg-gray-950
    dark:text-gray-100
    transition-colors
    duration-300
  "
    >
      <Navbar />
      <main className="pt-20">
        <Person />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
