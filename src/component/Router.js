import React from "react";
import {
    Route,
    useLocation,
} from "react-router-dom";
import SlideRoutes from 'react-slide-routes';
import Navbar from "./Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Skill from "../pages/Skill";
import Product from "../pages/Product"
import Footer from "./Footer";


function RouterComponent() {
    const location = useLocation();
    return (
        <div>
            <Navbar />
            <SlideRoutes
                location={location}
                duration={300}
                pathList={location.pathname}
                timing='ease-out'
            >
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/skill" component={Skill} />
                <Route path="/product" component={Product} />
            </SlideRoutes>
            <Footer />
        </div>
    );
}

export default RouterComponent;