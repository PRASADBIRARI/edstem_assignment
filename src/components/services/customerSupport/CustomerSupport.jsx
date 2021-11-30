import React from 'react'
import { useEffect } from 'react'

export default function CustomerSupport() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <div style={{ marginTop: "110px" }}>
            {/* <!--====== Feature Section Start ======--> */}
            <section class="feature-section section-gap-bottom">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-6 col-md-10">
                            <div class="feature-img text-lg-left text-center content-mb-md-50">
                                <img src="assets/img/illustrations/customerservice_image.svg" alt="Image" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-8 wow fadeInUp">
                            <div class="consultation-form-area pl-xl-3 content-mt-md-50">
                                <div class="consultation-form">
                                    <h3 class="title">Customer Service</h3>
                                    <p class="subtitle">Share your details and requirements</p>
                                    <form action="#">
                                        <div class="input-field">
                                            <input type="text" placeholder="Full Name" />
                                        </div>
                                        <div class="input-field">
                                            <input type="text" placeholder="Email Address" />
                                        </div>
                                        <div class="input-field">
                                            <input type="text" placeholder="Phone Number" />
                                        </div>
                                        <div class="input-field">
                                            <select>
                                                <option value="1" disabled selected>Subject</option>
                                                <option value="2">Subject One</option>
                                                <option value="3">Subject Two</option>
                                                <option value="4">Subject Three</option>
                                            </select>
                                        </div>
                                        <div class="input-field">
                                            <button type="submit" class="template-btn">Get Consultations <i class="far fa-long-arrow-right"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== Feature Section End ======--> */}




            {/* <!--====== About Area Start ======--> */}
            <section class="about-section section-gap bg-color-secondary section-animate-icons">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-6 col-md-10">
                            <div class="about-img content-mb-md-50 wow fadeInUp">
                            <img src="assets/img/illustrations/customerservice_img1.svg" alt="Image" class="animate-float-bob-y" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-8 color-white-70">
                            <h1 style={{ color: "white", marginBottom: "20px" }}>Customer Service</h1>
                            <p>
                                The only way to maintain clients is to provide good customer service . An expanding number of firms and organisations place emphasis on good customer service. At Taskmo, our customer support services are of utmost importance. We understand that securing new clients and retaining existing ones are essential for the success of any business venture. With expanding business activities, you can hardly find time to have a dedicated customer support service provider like Taskmo which will help you save time, effort and money. Taskmo is highly committed towards providing continued quality customer support services . Taskmo aims to provide excellent customer support service and improve client satisfaction while providing desired results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== About Area End ======--> */}


        </div>
    )
}
