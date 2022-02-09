import React from 'react'
import { useEffect } from 'react'

export default function PhonepayCaseStudy() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <div>



            {/* <!--====== Portfolio Area Started ======--> */}
            <section class="portfolio-area section-gap">
                <div class="container">
                    <div class="row">
                        <div class="col-12 order-first">
                            <div class="portfolio-thumb">
                            <img src="assets/case-study/phonepe.png" alt="Image" />
                            </div>
                        </div>
                        <div class="col-lg-4 order-lg-last">
                            <div class="portfolio-info-box wow fadeInUp">
                                <h4 class="font-montserrat fw-600">Project Info</h4>
                                <ul>
                                    <li>
                                        <span class="font-montserrat fw-700">Clients</span>
                                        <span class="font-montserrat fw-500">Phone Pe</span>
                                    </li>
                                    <li>
                                        <span class="font-montserrat fw-700">Project Category</span>
                                        <span class="font-montserrat fw-500"> Merchant Onboarding </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="font-montserrat portfolio-details-content wow fadeInUp">
                                <h2 class="font-montserrat fs-50 fw-600">Phone Pe - Merchant Onboarding</h2>
                                <h3 class="font-montserrat fw-600 mt-50">Challenge</h3>
                                <p class="mb-30 fs-18">
                                Phone Pe, one of India's Largest Payment Service Providers, found it difficult to onboard merchants and enable them to make a penny drop transaction using the application. 
                                </p>
                                <h3 class="font-montserrat fw-600 sub-title">Solution</h3>
                                <p class="mb-30 fs-18">
                                Taskmo laid down a strategy and streamlined the merchant onboarding process by appointing digitally trained taskers to acquire merchants. The field partners educated the merchants and helped them make their penny drop transactions through the PhonePe Application. 
                                </p>
                                {/* <div class="row">
                                    <div class="col-sm-6">
                                        <img src="assets/img/portfolio/portfolio-details-01.jpg" alt="Image" class="mb-30" />
                                    </div>
                                    <div class="col-sm-6">
                                        <img src="assets/img/portfolio/portfolio-details-02.jpg" alt="Image" class="mb-30" />
                                    </div>
                                </div> */}
                             
                                <div>
                                    <div class="col-lg-9">
                                        <div class="feature-lists mt-30">
                                            <div class="simple-icon-box icon-left mb-30 wow fadeInUp">
                                                <div class="icon">
                                                    <i class="flaticon-crop"></i>
                                                </div>
                                                <div class="content">
                                                    <h4 class="font-montserrat fw-600">300+  Gigsters</h4>
                                                </div>
                                            </div>
                                            <div class="simple-icon-box icon-left mb-30 wow fadeInUp">
                                                <div class="icon">
                                                    <i class="flaticon-crop"></i>
                                                </div>
                                                <div class="content">
                                                    <h4 class="font-montserrat fw-600">5x Faster Onboarding Rate</h4>
                                                </div>
                                            </div>
                                            <div class="simple-icon-box icon-left mb-30 wow fadeInUp">
                                                <div class="icon">
                                                    <i class="flaticon-crop"></i>
                                                </div>
                                                <div class="content">
                                                    <h4 class="font-montserrat fw-600">2000+ Working Hours</h4>
                                                </div>
                                            </div>
                                            <div class="simple-icon-box icon-left mb-30 wow fadeInUp">
                                                <div class="icon">
                                                    <i class="flaticon-crop"></i>
                                                </div>
                                                <div class="content">
                                                    <h4 class="font-montserrat fw-600">250+ Pincodes</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== Portfolio Area End ======--> */}





            {/* <!--====== Related Portfolio Start ======--> */}
{/* 
            <section class="related-portfolio bg-color-primary-7 section-gap">
                <div class="container">
                    <div class="section-heading text-center mb-60">
                        <h2 class="title">Related Projects</h2>
                        <span class="tagline">Best SEO Optimization Agency</span>
                    </div>
                    <div class="row portfolio-slider">
                        <div class="col-lg-4">
                            <div class="portfolio-items-two">
                                <div class="portfolio-thumb">
                                    <img src="assets/img/portfolio/05.jpg" alt="Image" />

                                    <a href="portfolio-details.html" class="portfolio-link"></a>
                                </div>
                                <div class="portfolio-content">
                                    <h4 class="title"><a href="portfolio-details.html">Digital Agency Template</a></h4>
                                    <div class="categories">
                                        <a href="#">Marketing Strategy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="portfolio-items-two">
                                <div class="portfolio-thumb">
                                    <img src="assets/img/portfolio/06.jpg" alt="Image" />

                                    <a href="portfolio-details.html" class="portfolio-link"></a>
                                </div>
                                <div class="portfolio-content">
                                    <h4 class="title"><a href="portfolio-details.html">Chatbot Web Template</a></h4>
                                    <div class="categories">
                                        <a href="#">Marketing Strategy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="portfolio-items-two">
                                <div class="portfolio-thumb">
                                    <img src="assets/img/portfolio/07.jpg" alt="Image" />

                                    <a href="portfolio-details.html" class="portfolio-link"></a>
                                </div>
                                <div class="portfolio-content">
                                    <h4 class="title"><a href="portfolio-details.html">Digital Products Design</a></h4>
                                    <div class="categories">
                                        <a href="#">Marketing Strategy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="portfolio-items-two">
                                <div class="portfolio-thumb">
                                    <img src="assets/img/portfolio/08.jpg" alt="Image" />

                                    <a href="portfolio-details.html" class="portfolio-link"></a>
                                </div>
                                <div class="portfolio-content">
                                    <h4 class="title"><a href="portfolio-details.html">Digital Agency Template</a></h4>
                                    <div class="categories">
                                        <a href="caseStudy">Marketing Strategy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="portfolio-items-two">
                                <div class="portfolio-thumb">
                                    <img src="assets/img/portfolio/09.jpg" alt="Image" />

                                    <a href="portfolio-details.html" class="portfolio-link"></a>
                                </div>
                                <div class="portfolio-content">
                                    <h4 class="title"><a href="portfolio-details.html">Fitness Program Template</a></h4>
                                    <div class="categories">
                                        <a href="caseStudy">Marketing Strategy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="portfolio-items-two">
                                <div class="portfolio-thumb">
                                    <img src="assets/img/portfolio/10.jpg" alt="Image" />

                                    <a href="portfolio-details.html" class="portfolio-link"></a>
                                </div>
                                <div class="portfolio-content">
                                    <h4 class="title"><a href="portfolio-details.html">E-Wallet Template</a></h4>
                                    <div class="categories">
                                        <a href="caseStudy">Marketing Strategy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <!--====== Related Portfolio End ======--> */}

        </div>
    )
}
