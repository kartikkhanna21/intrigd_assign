import React from "react";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.main_div} >

            <div class="col-sm-6">
                <img src="images/01.png" className={styles.about_img} />
            </div>
            <div class="col-sm-6">
                <div className={styles.about_content}>
                    <div class="about-title">
                        <h2 className={styles.intrigd_heading}>ABOUT INTRIGD</h2>
                        <p>An opinion aggregator for long format content .</p>
                    </div>

                    <ul className={styles.list_style}>
                        <li> <i class="fa fa-check" aria-hidden="true"></i> presents unbiased content with a vast coverage across industries and daily events</li>
                        <li><i class="fa fa-check" aria-hidden="true"></i> helps in effortless consumption of opinions through meaningful summaries</li>
                    </ul>
                    <p ><a href="#" className={`btn btn-outline ${styles.download}`}><i class="fa fa-download"></i><span className={styles.download_text}>Download</span></a></p>
                </div>
            </div>

            <style>
            {"\
                                .btn-outline{\
                                    color: white;\
                                    background-color: #29B9F2;\
                                    border-color: #29B9F2;\
                                    letter-spacing: 0.05em;\
                                }\
                "}

                {"\
                    .btn-outline:hover,\
                    .btn-outline:active,\
                    .btn-outline:focus,\
                    .btn-outline.active {\
                      background: white;\
                      color: #29B9F2;\
                      border-color: #29B9F2;\
                    }\
                "}
                {"\
                    .fa-download{\
                        margin-right:10px;\
                    }\
                "}
            </style>

        </div>

        
    )
}

export default About;