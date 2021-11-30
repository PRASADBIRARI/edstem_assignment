import React from 'react'
import { useEffect } from 'react'

export default function InfluencerMarketing() {

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
                                <img src="assets/img/illustrations/influencermarketing.svg" alt="Image" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-8 wow fadeInUp">
                            <div class="consultation-form-area pl-xl-3 content-mt-md-50">
                                <div class="consultation-form">
                                    <h3 class="title">Influencer Marketing</h3>
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
                                <img src="assets/img/illustrations/influencer_img1.svg" alt="Image" class="animate-float-bob-y" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-8 color-white-70">
                            <h1 style={{ color: "white", marginBottom: "20px" }}>Influencer Marketing</h1>
                            <p>
                                Influencer Marketing has risen to be a widely accepted trend in today’s digital world. Influencer marketing has turned out to be a widely accepted and trusted method of acquiring customers online. At Taskmo, we highly believe in providing sustainable influencer marketing services that lead to organic results. Taskmo has specialised in working with brands related to beauty, health and wellness, nutrition, personal care, lifestyle, art and much more. We also work with brands for film integrations and celebrity endorsements. We help in ideating brand strategies, identifying the right micro-influencers and macro-influencers, craft compelling content and deliver high-engagement campaigns. We, at Taskmo, provide dedicated end to end support from understanding the brief, scouting for the right influencers from the influencer marketplace, tracking the campaign constantly and reporting to the concerned constantly and working towards the success of the campaign.
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
                                            Who are micro-influencers and macro-influencers?
                                        </h5>
                                        <div id="accordion-1" class="collapse show" data-parent="#accordionFaqOne">
                                            <div class="accordion-content">
                                                As per industry standards, micro-influencers are those who have an audience size of 1,000 to 1,000,000 and on the other hand, macro-influencers are those who have a larger number of followers anywhere ranging between 100,000 and one million followers. We also collaborate with nano influencers who have close to a thousand followers.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h5 class="accordion-title collapsed" data-toggle="collapse" aria-expanded="false" data-target="#accordion-2">
                                            Will you help in crafting content for the influencers?
                                        </h5>
                                        <div id="accordion-2" class="collapse" data-parent="#accordionFaqOne">
                                            <div class="accordion-content">
                                                Yes! At Taskmo, we will help you to craft a highly creative piece of content for the influencer at an additional cost.
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
