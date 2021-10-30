import react from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer_main}>
            <div class="page-content page-container" className={styles.btn_div} id="page-content">

                <div className={styles.btn_div}>
                    <div class="template-demo mt-2">
                        <button class="btn btn-outline-dark btn-icon-text"> <i class="fa fa-apple btn-icon-prepend mdi-36px"></i> <span class="d-inline-block text-left"> <small class="font-weight-light d-block">Available on the</small> App Store </span> </button>
                        <button class="btn btn-outline-dark btn-icon-text"> <i class="fa fa-android btn-icon-prepend mdi-36px"></i> <span class="d-inline-block text-left"> <small class="font-weight-light d-block">Get it on the</small> Google Play </span> </button> </div>
                </div>

            </div>
            <p className={`text-center ${styles.footer_content}`}>Copyright ©  All Rights Reserved</p>
            <p className={`text-center ${styles.footer_content}`}>Terms & Conditions</p>
            <p className={`text-center ${styles.footer_content}`}>Privacy and Policy</p>
            <div className={`text-center social-link`}>
                <a href="https://www.facebook.com/Intrigdapp" target="_blank"><i class="fa-n fa-facebook"></i></a>
                <a href="https://twitter.com/intrigd_" target="_blank"><i class="fa-n fa-twitter"></i></a>
                <a href="https://in.linkedin.com/company/intrigd" target="_blank"><i class="fa-n fa-linkedin"></i></a>
                <a href="https://instagram.com/intrigd_" target="_blank"><i class="fa-n fa-instagram"></i></a>
            </div>

            <style>
                {"\
                    .font-weight-light {\
                        font-weight: 522!important;\
                    }\
                "}
                {"\
                .btn-outline-dark {\
                    margin: 1rem;\
                    color: white;\
                    background-color: transparent;\
                    background-image: none;\
                    border-color: white;\
                }\
            "}
                {"\
                    .fa{\
                        padding:1rem;\
                    }\
                "}
                
                {"\
                    .fa-n{\
                        display: inline-block;\
                        font: normal normal normal 14px/1 FontAwesome;\
                        font-size: inherit;\
                        text-rendering: auto;\
                        color:white;\
                        padding:1rem;\
                        -webkit-font-smoothing: antialiased;\
                        transition:.3s;\
                    }\
                "}

                {"\
                    .fa-n:hover{\
                        display: inline-block;\
                        font: normal normal normal 14px/1 FontAwesome;\
                        font-size: inherit;\
                        text-rendering: auto;\
                        color:#17a2b8;\
                        padding:1rem;\
                        -webkit-font-smoothing: antialiased;\
                    }\
                "}
     

                {"\
                    .btn-outline-dark {\
                        margin: 1rem;\
                        color: white;\
                        border:2.25px solid white;\
                        background-color: transparent;\
                        background-image: none;\
                        border-color: white;\
                    }\
                "}

                {"\
                    .btn-outline-dark:hover{\
                        margin: 1rem;\
                        color: black;\
                        border:2.25px solid white;\
                        background-color: white;\
                        background-image: none;\
                        border-color: white;\
                    }\
                "}
            </style>
        </div>
    )
}

export default Footer;