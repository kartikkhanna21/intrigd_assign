import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.Maindiv}>
            <div class="col-sm-1"></div>

            <div class="col-sm-3" className={styles.text}>
                <div className={styles.in_div}></div>
                <h1>Intrigd the Ultimate <br />Reading App.</h1>
                <div class="page-content page-container" className={styles.btn_div} id="page-content">
                    <div class="padding">
                        <div class="row container d-flex justify-content-center">
                            <div class="template-demo mt-2"> <button class="btn btn-outline-dark btn-icon-text"> <i class="fa fa-apple btn-icon-prepend mdi-36px"></i> <span class="d-inline-block text-left"> <small class="font-weight-light d-block">Available on the</small> App Store </span> </button> <button class="btn btn-outline-dark btn-icon-text"> <i class="fa fa-android btn-icon-prepend mdi-36px"></i> <span class="d-inline-block text-left"> <small class="font-weight-light d-block">Get it on the</small> Google Play </span> </button> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.image}>

                <div class="col-sm-5" className={styles.slider_inner_imge_2} class="banner_right">
                    <img class="mob_img" className={styles.mob_image} src="images/inner-1.png" alt="" />
                </div>
            </div>
            <div class="col-sm-1"></div>

            <style>

                


                
            {"\
                    .btn {\
                        display: inline-block;\
                        font-weight: 400;\
                        text-align: center;\
                        white-space: nowrap;\
                        vertical-align: middle;\
                        -webkit-user-select: none;\
                        -moz-user-select: none;\
                        -ms-user-select: none;\
                        user-select: none;\
                        border: 1px solid transparent;\
                        padding: 0.15rem 1rem 0rem 0rem;\
                        font-size: 1rem;\
                        line-height: 1.5;\
                        border-radius: 0.25rem;\
                        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\
                    }\
                "}


                {"\
                        .banner_right{\
                            animation-name: float-bob;\
                            animation-duration: 1.5s;\
                            animation-iteration-count: infinite;\
                            animation-timing-function: linear;\
                        }\
                    }\
                "}


                {"\
                                .page-content{\
                                    \
                                }\
                "}

            </style>

        </div>

    )
}

export default Hero;