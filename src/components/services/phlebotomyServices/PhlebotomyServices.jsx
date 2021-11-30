import React from 'react'
import { useEffect } from 'react'

export default function PhlebotomyServices() {

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
                                <img src="assets/img/illustrations/phlebotomy.svg" alt="Image" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-8 wow fadeInUp">
                            <div class="consultation-form-area pl-xl-3 content-mt-md-50">
                                <div class="consultation-form">
                                    <h3 class="title">Phlebotomy Service</h3>
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
                                <img src="assets/img/illustrations/Group.svg" alt="Image" class="animate-float-bob-y" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-8 color-white-70">
                            <h1 style={{ color: "white", marginBottom: "20px" }}>Phlebotomy Service</h1>
                            <p>
                                A phlebotomist is a medical service professional who primarily  draws blood for the purpose of testing, examination or for donation purposes.A Phlebotomist is educated and certified to draw blood and operate on various types of equipment and tools required to draw blood. During these unprecedented times, phlebotomists' services have become a profession of serious demand. Taskmo, an on-demand task fulfillment platform offers best phlebotomy services to medical laboratories, diagnostic labs and health care centers. At Taskmo, all our phlebotomists are verified of their backgrounds and are trained to perform the task in an efficient manner. All our phlebotomists at Taskmo undergo a rigorous verification process and a mandatory training program that will aid and assist the phlebotomist to perform their job effectively and efficiently. With Taskmo’s phlebotomy services, medical laboratories and diagnostic labs have the opportunity to complete numerous tests and earn higher revenues.
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
                                            Does Taskmo provide phlebotomy services across India?
                                        </h5>
                                        <div id="accordion-1" class="collapse show" data-parent="#accordionFaqOne">
                                            <div class="accordion-content">
                                                Yes! Taskmo is the best phlebotomy service provider in India. We offer phlebotomy services to medical laboratories, diagnostic labs and other healthcare centers across India.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h5 class="accordion-title collapsed" data-toggle="collapse" aria-expanded="false" data-target="#accordion-2">
                                            Does Taskmo offer a training program for all their phlebotomists?
                                        </h5>
                                        <div id="accordion-2" class="collapse" data-parent="#accordionFaqOne">
                                            <div class="accordion-content">
                                                All of the phlebotomists at Taskmo, go through a training program that is mandatory for them to perform the job.
                                                Most licensed practical nurses and registered nurses start off their medical career by working as phlebotomists and then pursue their further degrees.
                                                Innoquest can convey cross country inclusion with quick turnaround times; with an extensive and extending menu of tests and the best outcomes.

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
