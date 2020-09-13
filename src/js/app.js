import React from "react";
import ReactDOM from "react-dom";

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
            <Cover />
            <Feature />
            <Learn />
            <Who />
            <Contents />
            <People />
            <About />
            <Questions />
            <Payment />
            <Subscribe />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
