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
        <footer class="theme-footer-two pt-150 md-pt-80">
            <div class="top-footer">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-2 col-12 footer-about-widget" data-aos="fade-up" data-aos-duration="1200">
                            <a href="index-customer-support.html" class="logo">
                                {/* <img src="images/logo/deski_03.svg" alt="" /> */}
                                <img style={{ width: "5.5em" }} src="assets/img/logo.png" alt="taskmo-logo" />

                            </a>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6 footer-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
                            <h5 class="footer-title">Products</h5>
                            <ul>
                                <li><a href="#">Take the tour</a></li>
                                <li><a href="#">Live chat</a></li>
                                <li><a href="#">Self-service</a></li>
                                <li><a href="#">Social</a></li>
                                <li><a href="#">Mobile</a></li>
                                <li><a href="#">Collaboration</a></li>
                                <li><a href="#">deski Reviews</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6 footer-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                            <h5 class="footer-title">Services</h5>
                            <ul>
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Wordpress</a></li>
                                <li><a href="#">Online Marketing</a></li>
                                <li><a href="#">Content</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-3 col-sm-6 footer-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
                            <h5 class="footer-title">About us</h5>
                            <ul>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Work Portfolio</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Plan & Pricing</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 address-list" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <h5 class="footer-title">Address</h5>
                            <ul class="info">
                                <li><a href="#">companyinfo@mail.com</a></li>
                                <li><a href="#" class="mobile-num">+761 412 3224</a></li>
                            </ul>
                            <ul class="social-icon d-flex">
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="bottom-footer-content">
                    <div class="d-flex align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="1200" data-aos-anchor=".theme-footer-two">
                        <p>Copyright @2021 Stellarslog Technovation Pvt Ltd. All Right Reserve</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
