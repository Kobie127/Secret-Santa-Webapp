import React from "react";
import Header from "../components/common/header.component";
import LandingPage from "../components/homepage/landing-page";
import "./styles/homepage.styles.css";


const Homepage = () => {
    return (
        <div className="homepage">
            <Header/>
            <LandingPage/>
        </div>
    )
}

export default Homepage
