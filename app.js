import React from "react";
import ReactDOM from "react-dom/client";


const ele = <span>Is it ture</span>

//React Element
const title = (
    <div id="container1">
        {ele}
        <h1>Make some noice......!</h1>
    </div>
);

//React component
/*------------------------------------------------*/
//Class Based Components - OLD Way of writing code.
//Fuctional Component - New way of writing code.

//Component Composition
const Heading = () =>(
    <div id="container2">
        <h2 id="heading">It a new thing</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<>{title}<Heading/></>);
