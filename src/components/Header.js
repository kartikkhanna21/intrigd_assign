import React from "react";
import styles from './Header.module.css';
import { useEffect } from 'react';


const Header = () => {

    return (
        <div>
            <div class="nav-100" id="home">
                <header class="header" >
                    <nav className={`navbar navbar-expand-lg fixed-top`} >
                        <div class="container"><a href="index.html" class="navbar-brand text-uppercase font-weight-bold"><img src="images/logo.png" className={styles.myknot_logo_nav}  alt="" /></a>
                            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right">
                                <i class="fa fa-bars"></i>
                            </button>

                            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item "><p href="index.html" class="nav-link text-uppercase font-weight-bold  other-nav-head">HOME </p></li>
                                    <li class="nav-item "><p onclick="aboutus()" class="nav-link text-uppercase font-weight-bold other-nav-head"> ABOUT</p></li>


                                    <li class="nav-item "><p onclick="contact()" class="nav-link text-uppercase font-weight-bold other-nav-head">FEATURE</p></li>
                                    <li class="nav-item "><p onclick="contact()" class="nav-link text-uppercase font-weight-bold other-nav-head"> SCREENSHOT</p></li>
                                    <li class="nav-item "><p onclick="contact()" class="nav-link text-uppercase font-weight-bold other-nav-head"> TESTIMONIAL</p></li>
                                    <li class="nav-item "><p onclick="contact()" class="nav-link text-uppercase font-weight-bold other-nav-head">CONTACT</p></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>


            </div>
            <style>

                {"\
                    .navbar{\
                        background-color: #fff;\
                        box-shadow: 0px 0px 1px 0px black;\
                    }\
                }\
                "}



            </style>

        </div>

    )
}

export default Header;