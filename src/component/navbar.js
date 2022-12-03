import React from"react"
import "../styles/navbar.css"
import logo1 from "../images/logo1.png"
function NavBar(){
const [walletAddress, setWallet] = useState("");
const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }

};
 const connectToWallet = async () => {
     const walletResponse = await connectWallet();
  setWallet(walletResponse.address);
  }

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
                <button id="nav-btn" onClick={connectToWallet}>
                  {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}</button>
            </div>
            </div>
          </header>
         </>
    )
}

export {NavBar}
