import React from "react";
import styles from "./Feature.module.css";

const Feature = () => {
    return (
        <div className={styles.main}>
            <h1 className={`text-center ${styles.heading}`}>
                OUR APP FEATURE
            </h1>
            <div className={`row ${styles.feature_main}`}>
                <div class="col-sm-1"> </div>
                <div className={`col-sm-3 ${styles.feature_div}`}  >
                    <div className={styles.img_div}>
                        <img class="text-center" src="images/Selection.png" />
                    </div>

                    <h3 class="text-center">Selection</h3>
                    <p class="text-center">
                        Cut out the clutter with curated content handpicked especially for you.</p>
                </div>
                <div className={`col-sm-3 ${styles.feature_div} ${styles.aggregation}`} >
                    <div className={styles.img_div}>
                        <img class="text-center" src="images/Aggregation.png" />
                    </div>
                    <h3 class="text-center">Aggregation</h3>
                    <p class="text-center">
                        Differing opinions aggregated in an easy-to-consume fashion.</p>
                </div>
                <div className={`col-sm-3 ${styles.feature_div}`} >
                    <div className={styles.img_div}>
                        <img class="text-center" src="images/Simplification.png" />
                    </div>
                    <h3 class="text-center">Simplification</h3>
                    <p class="text-center">
                        Diverse range of complex topics simplified for you.</p>
                </div>
                <div class="col-sm-1"> </div>
            </div>


        </div>
    )
}

export default Feature;