import React from 'react'
import { useEffect } from 'react'

export default function PickingPacking() {

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
                                <img src="assets/img/illustrations/picking&packing_image.svg" alt="Image" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-8 wow fadeInUp">
                            <div class="consultation-form-area pl-xl-3 content-mt-md-50">
                                <div class="consultation-form">
                                    <h3 class="title">Picking Packing</h3>
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
                                <img src="assets/img/illustrations/pickpacking_img.svg" alt="Image" class="animate-float-bob-y" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-8 color-white-70">
                            <h1 style={{ color: "white", marginBottom: "20px" }}>Picking Packing</h1>
                            <p>
                                Almost every business today requires a warehouse or a distribution centre to help run their business in a smooth and efficient manner.For organisations that have warehouses it is highly important for you to have a well trained crew of pickers and packers who can help you optimise your warehouse according to the standards of the organisation. At Taskmo, we are dedicated towards easing the process of picking and packing for all our clients by streamlining the picking packing process and creating a perfectly optimized warehouse. At Taskmo, we keep our clients at the centre of our approach and ensure that every aspect of the pick and pack process is fulfilled and all the requirements are met successfully.
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
                                            Does Taskmo offer picking and packing services for all industries?
                                        </h5>
                                        <div id="accordion-1" class="collapse show" data-parent="#accordionFaqOne">
                                            <div class="accordion-content">
                                                Yes! Taskmo has a widespread network with access to over a 1000+ pincodes and we work with all types of industries across the country.
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
