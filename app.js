import React from "react";
import ReactDOM from "react-dom/client";

/*
*Header
* - Logo
* - NavItems(rightside)
*Body
* - SearchBar
* - RestrauntList
*   - RestrauntCard
*       - Image
*       - Name
*       - Rating
*       - Cusines
*Footer
* - Copyright
* - Links
* - Address
* - Contacts
*/
const Header = () => {
    return(
        <div className="header">
            <div>
                <img className="logo" src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li><img  className="cart_logo"src="https://img.icons8.com/?size=100&id=13014&format=png&color=000000"/></li>
                </ul>
            </div>
        </div>
    )
}


const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

