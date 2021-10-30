import React from "react";
import emailjs from "emailjs-com";
import styles from "./Form.module.css";

const Form = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rjxmarl',
            'template_cwp8du9',
            e.target,
            'user_nSwrvWANRuPdJFdeUXUK6')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className={`container contact_main`}>
            <h2 className="text-center mb-4 contact_heading">CONTACT US</h2>
            <div className={`w-75 mx-auto shadow p-5 row`}>

                <div className={`col-sm-6`}>
                    <div class="contact-address">
                        <div  className={styles.icon_text}>
                            <p><i class="fa fa-phone"></i> <span className={styles.information}><a className={`details ${styles.text}`} href="tel:+91-8025043077">+91-8025043077</a></span></p>
                        </div>

                        <div className={styles.icon_text}>
                            <p><i class="fa fa-envelope-o"></i> <span className={styles.information}><a className={`details ${styles.text}`}href="mailto:info@intrigd.co">info@intrigd.co</a></span></p>

                        </div>


                    </div>
                </div>
                <div className={`col-sm-6`}>
                    <form onSubmit={sendEmail}>
                        <div className="form-group">
                            <input required
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Name"
                                name="Name"

                            />
                        </div>
                        <div className="form-group">
                            <input required
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Email"
                                name="Email"
                            />

                        </div>
                        <div className="form-group">
                            <input required
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Subject"
                                name="Subject"

                            />
                        </div>
                        <div className="form-group">
                            <textarea required name="Message" className="form-control form-control-lg" placeholder="Message"></textarea>
                        </div>

                        <div>
                            <button type="Submit" class="btn-boot btn-outline-info-n text-center">Submit</button>

                        </div>

                    
                    </form>
                </div>

            </div>

            <style>

  

                {"\
                    .contact_heading{\
                        font-weight:bold;\
                    }\
                "}

                {"\
                    .a:hover{\
                        color: white;\
                    }\
                "}
                {"\
                    .btn-boot {\
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
                        padding: 0.5rem 1.5rem 0.5rem 1.5rem;\
                        font-size: 1rem;\
                        line-height: 1.5;\
                        border-radius: 0.25rem;\
                        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\
                    }\
                "}

                {"\
                    .form-control-lg {\
                        height: calc(2.7rem+ 2px);\
                        padding: 0.5rem 1rem;\
                        font-size: 1.15rem;\
                        line-height: 1.5;\
                        border-radius: 0.3rem;\
                    }\
                "}

                {"\
                    .btn-outline-info-n {\
                        color: white;\
                        background-color: black;\
                        background-image: none;\
                        border-color: black;\
                    }\
                "}


                {"\
                    .btn-outline-info-n:hover{\
                        color: white;\
                        background-color: #17a2b8;\
                        background-image: none;\
                        border-color: #17a2b8;\
                        cursor:pointer;\
                    }\
                "}
                {"\
                a{\
                    text-decoration:none;\
                    color:black;\
                }\
                "}
                {"\
                a:hover{\
                    text-decoration:none;\
                    color:black;\
                }\
                "}
                {"\
                    .contact_main{\
                        margin-bottom:5rem;\
                    }\
                "}

            </style>
        </div>
    );
}

export default Form;