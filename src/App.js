import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from "./component/Home"
import {Resources} from "./component/Resources"
import {SignUp} from "./component/signup"


export default function App() {
  return (
    <div className = "section_container">
       <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/signup" element={<SignUp />} />
          
        </Routes>
      </Router> 
     </div>

  );
}
