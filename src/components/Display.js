import "../App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Display() {
    return (
        <div className="bg-off-white">
            <Home/>
            <About/>
            <Contact/>
            <Projects/>
        </div>
    );
}