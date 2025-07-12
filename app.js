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
*       - Name Restaurant
*       - Rating⭐️
*       - Cusines
*       - Delivery Time
*Footer
* - Copyright
* - Links
* - Address
* - Contacts
*/

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img  className="logo" src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg" alt="app-logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><img className="cart-icon" src="https://img.icons8.com/?size=100&id=23072&format=png&color=000000" alt="cart-img"/></li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () => {
    return(
        <div className="resto-card">
            <img className="resto-logo" src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg" alt="pan-cake"/>
            <h4>Moonimist</h4>
            <p>Fish Musk</p>
            <p>4.5</p>
            <p>Time 25-30 min</p>
        </div>
    );
};

const Body = () => {
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="resto-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    );
};


const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)