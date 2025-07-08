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

const Header = () =>{
    return(
        <div className="header">
            <div className="logo">
                <img src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg" alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li><img src="https://img.icons8.com/?size=100&id=23072&format=png&color=000000" alt="cart-logo"/></li>
                </ul>
            </div>
        </div>
    )
}



const RestrauntList = () => {
    return(
        <div className="resto-card">
            <div><img  className="resto-img" src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg"/></div>
            <div className="resto-info">
                <h3>Moonimist</h3>
                <p>Burger, Dubai , Asia</p>
                <p>4.5</p>
                <p>Time: 20-30 mins</p>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
            <input type="text" placeholder="Search for restraunts"/>
            <button type="submit">Search</button>
            </div>
            <RestrauntList/>
            <RestrauntList/>
            <RestrauntList/>
        </div>
    )
}

const Footer = () => {
    return(
        <div className="footer">
            <p>Copyright &copy; 2023. All Rights Reserved.</p>
        </div>  
    )
}

const AppLayout =  () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)