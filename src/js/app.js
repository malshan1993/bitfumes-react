import React from "react";
import ReactDOM from "react-dom";
import Tilt from "react-tilt";

import Cover from "./Components/Cover";
import Feature from "./Components/Feature";
import Learn from "./Components/Learn";
import Who from "./Components/Who";
import Contents from "./Components/Contents";
import People from "./Components/People";
import About from "./Components/About";
import Questions from "./Components/Questions";
import Payment from "./Components/Payment";
import Subscribe from "./Components/Subscribe";

const App = () => {
    return (
        <>
            <Tilt className="tilt" options={{ max: 2, scale: 1 }}>
                <Cover />
            </Tilt>

            <Tilt className="tilt" options={{ max: 2, scale: 1 }}>
                <Feature />
            </Tilt>

            <Tilt className="tilt" options={{ max: 2, scale: 1 }}>
                <Learn />
            </Tilt>
            <Tilt className="tilt" options={{ max: 2, scale: 1 }}>
                <Who />
            </Tilt>
            <Tilt className="tilt" options={{ max: 2, scale: 1 }}>
                <Contents />
            </Tilt>
            <Tilt className="tilt" options={{ max: 2, scale: 1 }}>
                <People />
            </Tilt>
            <Tilt className="tilt" options={{ max: 2, scale: 1 }}>
                <About />
            </Tilt>
            <Tilt className="tilt" options={{ max: 2, scale: 1 }}>
                <Questions />
            </Tilt>
            <Tilt className="tilt" options={{ max: 2, scale: 1 }}>
                <Payment />
            </Tilt>
            <Tilt className="Tilt" options={{ max: 2, scale: 1 }}>
                <Subscribe />
            </Tilt>
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
