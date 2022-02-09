import React from 'react';
import { useHistory } from 'react-router';

export default function Footer() {
    const history = useHistory();
    const handleBackprivacypolicy = () => {
        history.push('/privacy-policy')
    };
    const handleBackHome = () => {
        history.push('/')
    };
    const handleBackServices = () => {
        history.push('/services')
    };
    const handleBackBlog = () => {
        history.push('/blog')
    };
    const handleBackContact = () => {
        history.push('/contact')
    };
    const handleBackFindJobs = () => {
        window.location.replace("/#section4");
    };
    const handleBackAbout = () => {
        history.push('/about')
    };

    const handleBackClass = () => {
        window.location.replace("/#section5");
    }




    return (
        <footer  class="theme-footer-two pt-100 md-pt-80">
            <div class="top-footer pb-40">
                <div class="container">
                    <div class="row justify-content-between">
                        
                        <div class="font-montserrat fw-500 col-lg-3 col-md-3 col-sm-6 address-list">
                            <a href="index-customer-support.html" class="logo">
                                <img style={{ width: "8em" }} src="assets/img/logo.png" alt="taskmo-logo" />
                            </a>
                            <ul class="info">
                                <li><a>#33, Mohan chambers, 1st Main Rd, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078</a></li>
                                <li><a href="#">business@taskmo.com</a></li>
                                <li><a href="#" class="mobile-num">+91 8448449069</a></li>
                            </ul>
                            <ul class="social-icon d-flex">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        <div  class="font-montserrat fw-500 col-lg-3 col-md-3 col-sm-6 footer-list" >
                            <h5 class="footer-title font-montserrat fw-600 ">Services</h5>
                            <ul>
                                <li><a href="merchant-onboarding">Merchant Onboarding</a></li>
                                <li><a href="background-verification">Background Verification</a></li>
                                <li><a href="tele-sales">Tele Sales</a></li>
                                <li><a href="last-mile-delivery">Last Mile Delivery</a></li>
                                <li><a href="customer-acquisition">Customer Acquisition</a></li>
                                <li><a href="stock-audits">Stock Audits</a></li>
                                <li><a href="geo-tagging">Geo Tagging</a></li>
                            </ul>
                        </div>
                        <div  class="font-montserrat fw-500 col-lg-3 col-md-3 col-sm-6 footer-list" >
                            <h5 class="footer-title font-montserrat fw-600">&nbsp;</h5>
                            <ul>
                                <li><a href="picking-packing">Picking And Packing</a></li>
                                <li><a href="survey-collection">Survey Collection</a></li>
                                <li><a href="product-sampling">Product Sampling</a></li>
                                <li><a href="influencer-marketing">Influencer Marketing</a></li>
                                <li><a href="customer-support">Customer Support</a></li>
                                <li><a href="warehouse-service">Warehouse Service</a></li>
                                {/* <li><a href="content-moderation">Content Moderation</a></li> */}
                                {/* <li><a href="phlebotomy-services">Phlebotomy Services</a></li> */}
                            </ul>
                        </div>
                        <div  class="font-montserrat fw-500 col-lg-2 col-md-3 col-sm-6 footer-list" >
                            <h5 class="footer-title font-montserrat fw-600">Quick links</h5>
                            <ul>
                                <li><a href="about">About us</a></li>
                                <li><a href="services">Service</a></li>
                                <li><a href="blog">Blogs</a></li>
                                <li><a href="contact">Contact</a></li>
                                <li><a href="privacy-policy">Terms & Conditions</a></li>
                            </ul>
                        </div>
    
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="bottom-footer-content">
                    <div class="d-flex align-items-center justify-content-center" >
                        <p class="font-montserrat fw-500 ">Copyright @2021 Stellarslog Technovation Pvt Ltd. All Rights Reserve</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
