import React from "react";
import Header from "../Header"
import FindOut from "../FindOut"
import Empower from "../Empower"
import Footer from "../Footer";
import Community from "../Community";
import Services from "../Services";
import Client from "../Client";

const Home = () => {
    return (
        <>
            <Header />
            <FindOut />
            <Empower />
            <Services />
            <Client />
            <Community />
            <Footer />
        </>
    )
}

export default Home;