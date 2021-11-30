import { textAlign } from '@mui/system'
import React from 'react'
import { useEffect } from 'react'

export default function RapidoCaseStudy() {

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
                                <img src="assets/img/portfolio/portfolio-details.jpg" alt="Image" />
                            </div>
                        </div>
                        <div class="col-lg-4 order-lg-last">
                            <div class="portfolio-info-box wow fadeInUp">
                                <h4 class="box-title">Project Info</h4>
                                <ul>
                                    <li>
                                        <span class="info-title">Clients</span>
                                        <span class="info">Rapido</span>
                                    </li>
                                    <li>
                                        <span class="info-title">Project Category</span>
                                        <span class="info">Partner Onboarding</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="portfolio-details-content wow fadeInUp">
                                <h2 class="portfolio-title">Rapido - Partner Onboarding </h2>
                                <h3 class="sub-title">Challenge</h3>
                                <p class="mb-30">
                                Rapido, a ride-sharing company, wanted to acquire auto drivers to partner with and offer service under Rapido. They found it difficult to reach out to auto drivers and onboard them to Rapido.  
                                </p>
                                <h3 class="sub-title">Solution</h3>
                                <p class="mb-30">
                                Taskmo's digitally trained taskers visited auto drivers and educated them about the benefits of the platform. They educate the application and get rides easily and instantly.  
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
                                                    <h4 class="title">20,000+ rides </h4>
                                                </div>
                                            </div>
                                            <div class="simple-icon-box icon-left mb-30 wow fadeInUp">
                                                <div class="icon">
                                                    <i class="flaticon-crop"></i>
                                                </div>
                                                <div class="content">
                                                    <h4 class="title">10+ cities</h4>
                                                </div>
                                            </div>
                                            <div class="simple-icon-box icon-left mb-30 wow fadeInUp">
                                                <div class="icon">
                                                    <i class="flaticon-crop"></i>
                                                </div>
                                                <div class="content">
                                                    <h4 class="title">500+ Taskers</h4>
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
