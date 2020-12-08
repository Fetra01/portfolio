import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact"

function App() {
    return (
        <div>
            <Navigation />
            <Home />
            <Portfolio />
            <About />
            <Contact />
        </div>
    )
}

export default App;