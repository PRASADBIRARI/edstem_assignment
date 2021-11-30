import React from 'react'
import { useEffect } from 'react'

export default function ProductSampling() {

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
                                <img src="assets/img/illustrations/productsampling_image.svg" alt="Image" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-8 wow fadeInUp">
                            <div class="consultation-form-area pl-xl-3 content-mt-md-50">
                                <div class="consultation-form">
                                    <h3 class="title">Product Sampling</h3>
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
                                <img src="assets/img/illustrations/Productsampling_img1.svg" alt="Image" class="animate-float-bob-y" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-8 color-white-70">
                            <h1 style={{ color: "white", marginBottom: "20px" }}>Product Sampling</h1>
                            <p>
                                At Taskmo, we believe that product sampling plays an important role in driving a customer's purchase decision. Product sampling is an activity conducted solely to increase brand awareness and drive sales. Over the last three years, Taskmo has helped popular brands to reach over a million customers. Taskmo has worked with products across all categories and reached customers across all age groups in the country. We frame a creative product sampling process and can help you sample almost everything. At Taskmo, we understand your brand and customers and help to manage an effective campaign that will help to provide you the desired results. The team at Taskmo, will work seamlessly with samplers who will be provided with ample training to understand the brief and successfully execute the given campaign.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== About Area End ======--> */}


            {/* <!--====== Faq Section Start ======--> */}
            <section class="faq-section section-gap">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 order-lg-last">
                            <div class="faq-image text-center text-lg-right content-mb-md-50">
                                <img src="assets/img/faq-image-2.jpg" alt="Image" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-10">
                            <div class="faq-content content-r-spacing">
                                <div class="section-heading mb-30">
                                    <h2 class="title">Frequently Asked Questions</h2>
                                </div>
                                <div class="accordion accordion-bordered" id="accordionFaqOne">
                                    <div class="accordion-item accordion-active">
                                        <h5 class="accordion-title collapsed" data-toggle="collapse" aria-expanded="true" data-target="#accordion-1">
                                            Does Taskmo work with all brands?
                                        </h5>
                                        <div id="accordion-1" class="collapse show" data-parent="#accordionFaqOne">
                                            <div class="accordion-content">
                                                Yes! Taskmo is highly inclusive we work with brands across all industries and sizes and help you to reach your target audience.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h5 class="accordion-title collapsed" data-toggle="collapse" aria-expanded="false" data-target="#accordion-2">
                                            Will Taskmo help my firm run campaigns on digital platforms?
                                        </h5>
                                        <div id="accordion-2" class="collapse" data-parent="#accordionFaqOne">
                                            <div class="accordion-content">
                                                Yes! Taskmo will assist you in running successful  sampling campaigns on every digital channel at an additional cost.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== Faq Section End ======--> */}
        </div>
    )
}
