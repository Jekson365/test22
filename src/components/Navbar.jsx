import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

import { BsCart } from "react-icons/bs";
export const Navbar = () => {
  const [active,setActive] = useState(true)
  return (
    <>
      <div className="cover">
        <div
          className="container-fluid
          saas
        d-flex align-items-center justify-content-between mw-1340"
        >
          <div className="col-md-4 res">
            <nav className="d-flex align-items-center justify-content-center">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Pages</a>
              </li>
            </nav>
          </div>
          <div className="col-md-4 m-4 d-flex align-items-center justify-content-center">
            <img
              src="https://assets.website-files.com/63627969e697b69f5ad5987a/63628a908a962d11f688343e_logo-header-tattooist-webflow-template.svg"
              alt=""
            />
          </div>
          <div className="col-md-4 res">
            <nav className="d-flex align-items-center justify-content-center">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#" className="cart">
                  <BsCart />
                </a>
              </li>
              <li>
                <a href="#" className="book">
                  Book Now
                </a>
              </li>
            </nav>
          </div>
          {/* responsive Bar */}
          <nav className={`${active ? 'active-bar' : "de-active-bar"} mob-bar d-flex flex-column align-items-start justify-content-start`}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </nav>
          <nav className="d-flex align-items-center mob-bar-2">
            <li>
              <a href="#" className="cart">
                <BsCart />
              </a>
            </li>
            <li>
              <a href="#" className="bars" onClick={()=>setActive(!active)}>
                <FaBars />
              </a>
            </li>
          </nav>
          {/* responsive Bar */}
        </div>
        <div className="cont-1 container d-flex justify-content-center flex-column align-items-center">
          <img
           
            className="logo"
            src="https://assets.website-files.com/63627969e697b69f5ad5987a/6362a060374a680b5c3fae76_logo-home-hero-tattooist-webflow-template.png"
            alt=""
          />
          <h1 data-aos='fade-up'>WE ARE AN INDIE TATTOO STUDIO IN LOS ANGELES, CA</h1>
          <p className="p w-75" >
            Magna nisl egestas amet netus lectus malesuada diam et ullamcorper
            et inurna maecenas praesent ut vitae tempus sollicitudin pharetra
            ipsum molestie scelerisque aliquam vitae magna
          </p>
          <div className="buttons d-flex">
            <button className="book">Book Now</button>
            <button className="ol">About Our Studio</button>
          </div>
        </div>
      </div>
    </>
  );
};
