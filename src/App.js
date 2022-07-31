import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App(){
    return (
        <div className="App">
           <Navbar />
           <Intro />
           <Services />
           <Experience />
           <Works />
           <Contact/>
           <Footer />
        </div>
    );
    
}

export default App;