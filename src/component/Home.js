import React from "react";
import {NavBar} from "./navbar"
import nft from "../images/nft.png";
import download4 from "../images/download4.png";
import images19 from "../images/images19.png";
import images16 from "../images/images16.png";
import images8 from "../images/images8.png";
import favouriwema from "../images/favouriwema.jpg"
import favourezeliora from "../images/favourezeliora.jpg"
import chidinma from "../images/chidinma.jpeg"
import samihah from "../images/samihah.jpeg"
import FaithObafemiBlockleaders from "../images/FaithObafemiBlockleaders.jpg"
import ToyibahMoradeke from "../images/ToyibahMoradeke.jpg"
import preciousaustine from "../images/preciousaustine.jpg"





function Home (){
    return(
        <div className="main">
            <NavBar />
        <main>
        <section className="hero-section">
            <div className="hero-section-partA">
                <h2>Discover Rare Collections of Arts, Resources and Trending Articles on Crypto and <span>NFTs</span></h2>
                <p>
                    Stark Is where web3 creators build community using social tokens, NFTs etc. Creators super 
                    fans help by supporting our exclusive content. Our Content covers different areas, background
                     and industries.Made for Collectors by Creators. The best community for high end collectors.
                </p>
                <div className="hero-buttons">
                    <button className="explore-button">
                        <a href="">Explore</a>
                    </button>
                    <button className="create-button">
                        <a href="/create.html">Create</a>
                    </button>
                </div>
            </div>

            <div className="hero-section-partB">
                <div className="hero-image-sec1">
                    <img src={nft} alt={nft} id="hero-img1"/>
                </div>
                <div className="hero-image-sec2">
                    <img src={download4} alt={download4} id="hero-img2"/>
                    <img src={images19} alt={images19} id="hero-img3"/>
                </div>
            </div>
                
        </section>

        <section className="section-one">
            <div className="section-one-partA">
                <h3>Stark Offers and benefits </h3>
                <p>
                    Stark helps creators have control over their audience content and revenue content. 
                    Stark harbours both Creators and collectors of Art and NFTs because we believe we can 
                    all learn from each other , A web3 creator could be a blogger, a photographer, Artist, 
                    Music with a website or journalist.
                </p>
            </div>

            <div className="section-one-partB">
                <h3>Featured Posts</h3>
                <div className="featured-section">
                    <div className="featured-1">
                        <img src={images16} alt={images16}/>
                        <p>The Gold Mind by Derr Frisher</p>
                    </div>
                    <div className="featured-2">
                        <img src={images8} alt={images8} alt />
                        <p>Treasured NFTs by Thomas Green</p>
                    </div>
                </div>
                <span><a href="">Connect Wallet  to view fully</a></span>
            </div>
        </section>

        <section className="color-two">
                <div className="section-how">
                    <h2 className="h2-stylexx">How Stark Works</h2>
          
              <div className="main-card-section">
                <div className="main-cards">

                  <div className="card1">
                        <h3>STEP 1</h3>
                        <div className="subcards-1">
                          <p>Connect Wallet</p>
                        </div>
                  </div>
  
                  <div className="card2">
                    <h3>STEP 2</h3>
                    <div className="subcards-2">
                      <p>Creators upload content and lock with Specified NFTs</p>
                    </div>
                  </div>
  
                  <div className="card3">
                    <h3>STEP 3</h3>
                    <div className="subcards-3">
                      <p>Collectors view content matching the required NFT on the post</p>
                    </div>
                  </div>
                </div>

                <p className="text-collect">
                  For Collectors Visiting the website Choose content you want to Read,
                  Unlock the content with a specified token using your wallet. For
                  Collectors that doesnt own a wallet proceed to Open one.
                    <a id="green-italics" href="#"> <i> Click to Create a wallet </i></a>
                </p>
              
                  
                </div>

              </div>
        </section>
        {/* end of how stark */}
        <section className="section-three">
            <div className="color-two sec-3">
                <div className="main-part-3">
                    <h2>Meet The Team</h2>

                    <div className="section-three-main">
                      <div className="sec-3-1">
                        <div className="section-three-a">
                            <img src={chidinma} alt={chidinma} id="team-member-1"/>
                            <img src={samihah} alt={samihah} id="team-member-2"/>
                        </div>
        
                        <div className="section-three-b">
                          <p>
                            Our services are simple affordable and flexible allows users to start small and grow their business
                            our company help you grow and become more relaxed while you run/grow your business.
                          </p>
                         
                        </div>
        
                        <div className="section-three-c">
                            <img src={ToyibahMoradeke} alt={ToyibahMoradeke} id="team-member-5"/>
                            <img src={FaithObafemiBlockleaders} alt={FaithObafemiBlockleaders} id="team-member-6"/>
                        </div>
                      </div>

                      <div className="sec-3-2">
                        <img src={favouriwema} alt={favouriwema} id="team-member-3"/>
                        <img src={favourezeliora} alt={favourezeliora} id="team-member-4"/>
                        <img src={preciousaustine} alt={preciousaustine} id="team-member-7"/>
                      </div>
                    </div>
                </div>
            </div>
        </section>
        </main>

    

    
     <footer>
        <section className="footer-section">
            <div className="footer-section-1">
                <div className="footer-section-1-1">
                    <h2>STARK</h2>
                </div>
                <div className="footer-section-1-2">
                    <h3>Customised Services </h3>
                    <a href="">Help Centre</a>
                    <a href="">About us</a>
                    <a href="">FAQs</a>
                    <a href="">Contact Us</a>
                </div>
                <div className="footer-section-1-3">
                    <h3>Who we are</h3>
                    <a href="">Resources</a>
                    <a href="">Team</a>
                    <a href="">Tech Blog</a>
                    <a href="">Use our platform</a>                  
                </div>
                <div className="footer-section-1-4">
                    <h3>Support</h3>
                    <a href="">Collectors</a>
                    <a href="">Parner with us</a>
                    <a href="">Support policy</a>
                    <a href="">Creators</a>      
                </div>
            </div>

            <div className="footer-section-2">   
                 <div className="footer-sec-2-a"> 
                        {/* <img src={} alt={}/> */}
                        {/* <img srs={} alt={}/> */}
                  
                      {/* <img src={} alt={}/> */}
                     </div> 
                
                <div className="stark-footer-icons">
                    <i class="ri-twitter-fill footer-icon"></i>
                    <i class="ri-facebook-box-fill footer-icon"></i>
                    <i class="ri-youtube-fill footer-icon"></i>
                    <i class="ri-linkedin-box-fill footer-icon"></i>
                </div>
            </div>

            <hr></hr>

            <div className="footer-section-3">
                <p>©2022 All rights reserved. Various trademarks held by their respective owners.</p>
            </div>
        </section> 
    </footer>
    </div>
    );
};
export {Home}