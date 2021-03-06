import React from "react";
import {
    Route,
    useLocation,
} from "react-router-dom";
import SlideRoutes from 'react-slide-routes';
import Header from "./Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Skill from "../pages/Skill";
import Product from "../pages/Product"
import Footer from "./Footer";
import "../assets/router.scss";

const RouterComponent =() => {
    const location = useLocation();
    return (
        <div id="wrapper">
            <Header />
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