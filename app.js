import React from "react";
import ReactDOM from "react-dom/client";
//-(npm install --save-dev @types/react @types/react-dom)
// React.createElement => Object => Htmlelement(render)
const heading = React.createElement("h1",{id:"heading"},"Into the React World 🚀");

//Throught Babel(parcel pkg)
// JSX => React.createElement => ReactElement - JS Object => HTMLElement(render)
const jsxheading = <h1 className="head" tabIndex="1">Assalaamu alikum people 🚀</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading)




