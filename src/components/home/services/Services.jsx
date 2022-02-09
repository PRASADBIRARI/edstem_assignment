import React from 'react'
import { useHistory } from 'react-router'

export default function Services() {

    const history = useHistory()
    return (
        <div>
            <div class="mt-80 md-mt-80" id="product">
                <div class="inner-container">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-8 col-lg-10 col-md-9 m-auto">
                                <div class="text-center">
                                    <h2 class="fs-50 fw-600 font-montserrat">Services</h2>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="font-montserrat block-style-sixteen" style={{ background: "#ECF3F1" }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-5 col-lg-6" data-aos="fade-right" data-aos-duration="1200">
                                    <div class="icon d-flex align-items-center justify-content-center" style={{ background: "#DEEAE7" }}>
                                        <img width="30px" src="assets/services/service_icon/merchant_onboarding.svg" alt="" />
                                    </div>
                                    <h3 style={{ fontSize: "36px", fontWeight: "600" }} class="font-montserrat title">Merchant Onboarding.</h3>
                                    <p style={{ fontSize: "22px" }}>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups.</p>
                                    <a href="merchant-onboarding">
                                        <img src="images/icon/72.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <img src="assets/services/merchant_onboarding.svg" alt="" class="shapes screen-three" />
                    </div>

                    <div class="font-montserrat block-style-sixteen" style={{ background: "#EDF3F9" }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-5 col-lg-6 ml-auto" data-aos="fade-left" data-aos-duration="1200">
                                    <div class="icon d-flex align-items-center justify-content-center" style={{ background: "#E1E7ED" }}>
                                        <img width="30px" src="assets/services/service_icon/background_verification.svg" alt="" />

                                    </div>
                                    <h3 style={{ fontSize: "36px", fontWeight: "600" }} class="font-montserrat title">Background Verification</h3>
                                    <p style={{ fontSize: "22px" }}>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups.</p>
                                    <a href="background-verification"><img src="images/icon/72.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <img src="assets/services/background_verification.svg" alt="" class="shapes screen-two" />
                    </div>

                    <div class="font-montserrat block-style-sixteen" style={{ background: "#F9F1EF" }}>
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-5 col-lg-6" data-aos="fade-right" data-aos-duration="1200">
                                    <div class="icon d-flex align-items-center justify-content-center" style={{ background: "#EDE5E3" }}>
                                        <img width="30px" src="assets/services/service_icon/telesales.svg" alt="" />

                                    </div>
                                    <h3 style={{ fontSize: "36px", fontWeight: "600" }} class="font-montserrat title">Tele Sales.</h3>
                                    <p style={{ fontSize: "22px" }}>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups.</p>
                                    <a href="tele-sales"><img src="images/icon/72.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <img src="assets/services/telesales.svg" alt="" class="shapes screen-three" />
                    </div>






                </div>
            </div>








            <div style={{ cursor: "pointer" }} class="text-center mt-80 md-mt-50"><a onClick={() => history.push('/services')} class="theme-btn-ten">More Services<i class="fa fa-chevron-right" aria-hidden="true"></i></a></div>


            {/* <div class="fancy-short-banner-nine mt-170 md-mt-80">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-lg-11 m-auto" data-aos="fade-up" data-aos-duration="1200">
                            <div class=" font-montserrat cl-white text-center">
                                <h2 class="font-montserrat fw-600 cl-white fs-50">200k+ Customers have our deski.Try it now!</h2>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
                        <div class="dropdown download-btn">
                            <button class="fw-600" type="button"  >
                                Find Jobs
                            </button>
                          
                        </div>
                    </div>
                </div>
                <img src="images/shape/177.svg" alt="" class="shapes shape-one" />
                <img src="images/shape/178.svg" alt="" class="shapes shape-two" />
            </div> */}



        </div>
    )
}
