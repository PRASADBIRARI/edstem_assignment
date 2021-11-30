import React from 'react'
import { useEffect } from 'react'

export default function CustomerAcquisition() {

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
                                <img src="assets/img/illustrations/customeracquistion_image.svg" alt="Image" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-8 wow fadeInUp">
                            <div class="consultation-form-area pl-xl-3 content-mt-md-50">
                                <div class="consultation-form">
                                    <h3 class="title">Customer Acquisition</h3>
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
                                <img src="assets/img/illustrations/aquisition_img.svg" alt="Image" class="animate-float-bob-y" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-8 color-white-70">
                            <h1 style={{ color: "white", marginBottom: "20px" }}>Customer Acquisition</h1>
                            <p>
                                For every business, customer acquisition is a recurring business activity. It is highly expensive to attract new customers and also retain existing ones. Whether you own a small business, a startup or a large-scale organisation, with Taskmo you can attract new customers with our successful customer acquisition strategy and help accelerate business growth. Our efficient sales personnel will expand your customer base through our innovative user acquisition strategy and ramp up customer acquisition  in the fastest way possible. With our personalised customer acquisition strategy, we can help you identify the right opportunities, optimize their buying decision, leverage present technology and help in creating high-quality leads and fulfil your sales goals within a quick turnaround time.
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
                                            What industries do you provide customer acquisition services for?
                                        </h5>
                                        <div id="accordion-1" class="collapse show" data-parent="#accordionFaqOne">
                                            <div class="accordion-content">
                                                Taskmo offers its customer acquisition services to a diverse range of industries such as:
                                                <ol>
                                                    <li>1) B2B Suppliers and Vendors </li>
                                                    <li>2) Online and Retail Consumer Companies</li>
                                                    <li>3) Online Retailers and Resellers </li>
                                                    <li>4) Advertising Agencies</li>
                                                    <li>
                                                        5) Business Publishers and so much more.
                                                    </li>
                                                </ol>


                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h5 class="accordion-title collapsed" data-toggle="collapse" aria-expanded="false" data-target="#accordion-2">
                                        Across what kind of target groups can Taskmo acquire customers from? 
                                        </h5>
                                        <div id="accordion-2" class="collapse" data-parent="#accordionFaqOne">
                                            <div class="accordion-content">
                                            At Taskmo, we help you acquire clients and customers across all target markets. 
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
