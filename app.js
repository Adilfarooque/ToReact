import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const Title = () => (
<h1 className="head">THE HEAD TITLE 🚀</h1>
);

//React component
/*------------------------------------------------*/
//Class Based Components - OLD Way of writing code.
//Fuctional Component - New way of writing code.

//Component Composition
const Heading = () => (
    <div id="container">
        <Title/>
        <h1 id="heading"> Make some noice </h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>);