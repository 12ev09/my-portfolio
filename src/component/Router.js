import React from "react";
import {
    Switch,
    Route,
    useLocation,
} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Skill from "../pages/Skill";
import { AnimatePresence } from "framer-motion";
import Footer from "./Footer";

function RouterComponent() {
    const location = useLocation();
    return (
        <div>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/skill" component={Skill} />
                </Switch>
            </AnimatePresence>
            <Footer />
        </div>
    );
}

export default RouterComponent;