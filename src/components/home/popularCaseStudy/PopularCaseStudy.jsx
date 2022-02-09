import React from 'react'
import { useHistory } from 'react-router'

export default function PopularCaseStudy() {
    const history = useHistory()

    const handleCaseStudyAmazon = () => {
        history.push('/casestudy-amazon')
    }

    const handleCaseStudyRapido = () => {
        history.push('/casestudy-rapido')
    }
    const handleCaseStudyPhonepay = () => {
        history.push('/casestudy-phonepay')
    }
    const handleCaseStudyZomato = () => {
        history.push('/casestudy-zomato')
    }
    return (

        <div class="font-montserrat fancy-feature-twentyEight lg-container mt-150 pt-50 md-mt-70" id="story">
            <div class="container">
                <div class="row">
                    <div class="col-xl-11 m-auto" data-aos="fade-up">
                        <div class="text-center pb-80 md-pb-30">
                            <h2 class="font-montserrat fw-600 fs-50">Case Study</h2>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-lg-6 mt-40" data-aos="fade-up" data-aos-delay="100">
                        <div class="block-style-twentyNine" style={{ background: "#673AB7" }}>
                            <div class="logo">
                                <img width="180" src="assets/technology/phonepay.svg" alt="" />
                            </div>
                            {/* <a class="fancybox video-icon tran3s" data-fancybox="" href="https://www.youtube.com/embed/aXFSJTjVjw0" tabindex="0"><img src="images/icon/152.svg" alt="" /></a> */}
                            <h3 class="font-montserrat cl-white"><a onClick={handleCaseStudyPhonepay} style={{ cursor: "pointer" }}>Phone Pe - Merchant Merchant Merchant Merchant Merchant Onboarding</a></h3>
                            <a onClick={handleCaseStudyPhonepay} style={{ cursor: "pointer" }} class="read-more-btn d-flex justify-content-between align-items-center w-100">
                                <span style={{ fontSize: "18px" }}>Continue Reading</span>
                                <img src="images/icon/153.svg" alt="" />
                            </a>
                        </div>
                    </div>

                    <div class="col-lg-6 mt-40" data-aos="fade-up">
                        <div class="block-style-twentyNine" style={{ background: "#F79C34" }}>
                            <div class="logo">
                                <img width="130" src="assets/technology/amazon.svg" alt="" />
                            </div>
                            {/* <a class="fancybox video-icon tran3s" data-fancybox="" href="https://www.youtube.com/embed/aXFSJTjVjw0" tabindex="0"><img src="images/icon/152.svg" alt="" /></a> */}
                            <h3 class="font-montserrat cl-white"><a onClick={handleCaseStudyAmazon} style={{ cursor: "pointer" }}>Amazon Seller Central - Onboarding and Acquisition Challenge</a></h3>
                            <a onClick={handleCaseStudyAmazon} style={{ cursor: "pointer" }} class="read-more-btn d-flex justify-content-between align-items-center w-100">
                                <span style={{ fontSize: "18px" }}>Continue Reading</span>
                                <img src="images/icon/153.svg" alt="" />
                            </a>
                        </div>
                    </div>




                    <div class="col-lg-6 mt-40" data-aos="fade-up" data-aos-delay="100">
                        <div class="block-style-twentyNine" style={{ background: "#FE344A" }}>
                            <div class="logo">
                                <img src="assets/technology/zomato.svg" alt="" />
                            </div>
                            {/* <a class="fancybox video-icon tran3s" data-fancybox="" href="https://www.youtube.com/embed/aXFSJTjVjw0" tabindex="0"><img src="images/icon/152.svg" alt="" /></a> */}
                            <h3 class="font-montserrat cl-white"><a onClick={handleCaseStudyZomato} style={{ cursor: "pointer" }}>Zomato - User Acquisition.</a></h3>
                            <a onClick={handleCaseStudyZomato} style={{ cursor: "pointer" }} class="read-more-btn d-flex justify-content-between align-items-center w-100">
                                <span style={{ fontSize: "18px" }}>Continue Reading</span>
                                <img src="images/icon/153.svg" alt="" />
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 mt-40" data-aos="fade-up">
                        <div class="block-style-twentyNine" style={{ background: "#FFCC08" }}>
                            <div class="logo">
                                <img src="assets/technology/rapido.svg" alt="" />
                            </div>
                            {/* <a class="fancybox video-icon tran3s" data-fancybox="" href="https://www.youtube.com/embed/aXFSJTjVjw0" tabindex="0"><img src="images/icon/152.svg" alt="" /></a> */}
                            <h3 class="font-montserrat cl-white"><a onClick={handleCaseStudyRapido} style={{ textDecoration:"none",cursor: "pointer" }}>Rapido - Partner Onboarding</a></h3>
                            <a onClick={handleCaseStudyRapido} style={{ cursor: "pointer" }} class="read-more-btn d-flex justify-content-between align-items-center w-100">
                                <span>Continue Reading</span>
                                <img src="images/icon/153.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-80 md-mt-50"><a href="#" class="theme-btn-ten">Read all customer stories <i class="fa fa-chevron-right" aria-hidden="true"></i></a></div>
            </div>
        </div>
    )
}
