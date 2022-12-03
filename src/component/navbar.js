import React from"react"
import "../styles/navbar.css"
import logo1 from "../images/logo1.png"
function NavBar(){



    return(
        <>
            <header>
            <div className="nav-section">
            <div className="nav1">
                <img src={logo1} alt={logo1} id="nav-logo"/>
            </div>
            <div className="nav2">
                <input type="text" name="" id="search-bar"
                 placeholder=" Search items ,articles , latest  project,resources"/>
                <a href="#instagram-activeTask" id="nav-middle">Home</a>
                <a href="#-activeTask" id="nav-middle">Resources</a>
                
                <a href="Login"></a>
                <button id="nav-btn"><a href="./signup.html">Sign up</a></button>
            </div>
            </div>
          </header>
         </>
    )
}

export {NavBar}
