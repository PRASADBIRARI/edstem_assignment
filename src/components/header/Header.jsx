import React from 'react'
import { useHistory } from 'react-router'

export default function Header() {
    const history = useHistory()
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
        console.log('ABOUT')
        history.push('/about')
    };

    const handleBackClass = () => {
        window.location.replace("/#section5");
    }

    const currentRoute = useHistory().location.pathname.toLowerCase();


    console.log('currentRoute', currentRoute)



    return (
        <div class="theme-main-menu sticky-menu theme-menu-three">
            <div  class="d-flex align-items-center justify-content-center">
                <div class="logo">
                    <a style={{ cursor: "pointer",marginBottom:"5px" }} onClick={handleBackHome}>
                        <img style={{ height: "3em" }} src="assets/img/logo.png" alt="taskmo-logo" />

                    </a></div>

                <nav id="mega-menu-holder" class="navbar navbar-expand-lg">
                    <div class="container nav-container">
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="flaticon-menu-of-three-lines"></i>
                        </button>
                        <div class="navbar-collapse collapse" id="navbarSupportedContent">
                            <div class="font-montserrat d-lg-flex justify-content-between align-items-center">
                                <ul class="fw-500 font-montserrat navbar-nav">
                                    <li class=" nav-item dropdown position-static active">
                                        <a style={{ cursor: "pointer", color: "black" }} onClick={() => history.push('/')} class="nav-link ">Home</a>
                                    </li>
                                    <li class="nav-item dropdown position-static active">
                                        <a style={{ cursor: "pointer", color: "black"}} onClick={() => history.push('/about')} class="nav-link " >About</a>
                                    </li>
                                    <li  class="nav-item dropdown">
                                        <a class="nav-link" onClick={() => history.push('/services')} style={{ cursor: "pointer", color: "black" }}>Services</a>
                                        {/* <ul class="dropdown-menu">
                                            <li><a href="merchant-onboarding" class="dropdown-item">Merchant Onboarding</a></li>
                                            <li><a href="background-verification" class="dropdown-item">Background Verification</a></li>
                                            <li><a href="tele-sales" class="dropdown-item">Tele Sales</a></li>
                                            <li><a href="last-mile-delivery" class="dropdown-item">Last Mile Delivery</a></li>
                                            <li><a href="customer-acquisition" class="dropdown-item">Customer Acquisition</a></li>
                                            <li><a href="stock-audits" class="dropdown-item">Stock Audits</a></li>
                                            <li><a href="geo-tagging" class="dropdown-item">Geo Tagging</a></li>
                                            <li><a href="picking-packing" class="dropdown-item">Picking And Packing</a></li>
                                            <li><a href="survey-collection" class="dropdown-item">Survey Collection</a></li>
                                            <li><a href="product-sampling" class="dropdown-item">Product Sampling</a></li>
                                            <li><a href="influencer-marketing" class="dropdown-item">Influencer Marketing</a></li>
                                            <li><a href="customer-support" class="dropdown-item">Customer Support Service</a></li>
                                            <li><a href="warehouse-service" class="dropdown-item">Warehouse Service</a></li>
                                            <li><a href="content-moderation" class="dropdown-item">Content Moderation</a></li>
                                            <li><a href="phlebotomy-services" class="dropdown-item">Phlebotomy Services</a></li>
                                        </ul> */}
                                    </li>
                                    <li class="nav-item dropdown position-static active">
                                        <a style={{ cursor: "pointer", color: "black" }} onClick={handleBackBlog} class="nav-link ">Blog</a>
                                    </li>
                                    
                                    {/* <li class="nav-item dropdown position-static active">
                                        <a style={{ color: "black" }} class="nav-link " data-toggle="dropdown">Careers</a>
                                    </li> */}

                                    <li class="nav-item dropdown position-static active">
                                        <a style={{ cursor: "pointer", color: "black" }} onClick={handleBackContact} class="nav-link ">Contact</a>
                                    </li>
                                </ul>
                                <ul class="right-widget user-login-button d-flex align-items-center justify-content-center">
                                    <li>
                                        <a style={{ borderRadius: "10px"}} href="#" class="signUp-action d-flex align-items-center">
                                            <span class=" fw-500 fs-18 ">Find Jobs</span>
                                            <img src="images/icon/53.svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a style={{ borderRadius: "10px"}} href="#" class=" fw-500 fs-18 signUp-action d-flex align-items-center">
                                            <span class=" fw-500 fs-18 ">Hire Taskers</span>
                                            <img src="images/icon/53.svg" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>


    )
}
