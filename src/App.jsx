import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <AboutMe />
                <Skills />
                <Projects />
                <Experience />
                <Education />
                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default App;