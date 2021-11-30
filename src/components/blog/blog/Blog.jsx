import React from 'react'
import { useEffect } from 'react'

export default function Blog() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            {/* <section class="blog-area section-gap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="blog-post-loop pr-xl-5">
                                <div class="single-blog-post">
                                    <div class="post-thumbnail">
                                        <img src="assets/img/blog/taskmo-blog-1.png" alt="Image" />
                                    </div>
                                    <div class="post-content">
                                        <ul class="post-meta">
                                            <li>
                                                <a href="#"><i class="far fa-calendar-alt"></i> 11 Nov 2021</a>
                                            </li>
                                        </ul>
                                        <h3 class="post-title">
                                            <a href="blog-details-1">Taskmo - The Future of Gig Works</a>
                                        </h3>
                                        <p>
                                            A gig economy essentially refers to a free market economy that consists of individuals who create a career for themselves based on the skills they possess or the job they are ready to perform.
                                        </p>

                                        <a href="blog-details-1" class="post-btn">Read More <i class="far fa-long-arrow-right"></i></a>
                                    </div>
                                </div>



                                <div class="single-blog-post">
                                    <div class="post-thumbnail">
                                        <img src="assets/img/blog/taskmo-blog-2.jpeg" alt="Image" />
                                    </div>
                                    <div class="post-content">
                                        <ul class="post-meta">
                                            <li>
                                                <a href="#"><i class="far fa-calendar-alt"></i> 06 Nov 2021</a>
                                            </li>
                                        </ul>
                                        <h3 class="post-title">
                                            <a href="blog-details-2">What is Gig Marketplace All About?</a>
                                        </h3>
                                        <p>
                                            Are you one of them who has taken a ride in Uber, ordered your dinner through Zomato and sold your pre-loved items through Meesho?                                         </p>
                                        <a href="/blog-details-2" class="post-btn">Read More <i class="far fa-long-arrow-right"></i></a>
                                    </div>
                                </div>

                                <div class="single-blog-post">
                                    <div class="post-thumbnail">
                                        <img src="assets/img/blog/taskmo-blog-3.jpeg" alt="Image" />
                                    </div>
                                    <div class="post-content">
                                        <ul class="post-meta">
                                            <li>
                                                <a href="#"><i class="far fa-calendar-alt"></i> 02 Nov 2021</a>
                                            </li>
                                        </ul>
                                        <h3 class="post-title">
                                            <a href="blog-details-3">What is Gig Economy? Which is the Best Gig Economy Company in India?</a>
                                        </h3>
                                        <p>
                                            Gig Economy essentially refers to a free market economy where employers hire employees, independent contractors, temporary workers for either short-term or long-term or until the need exists.
                                        </p>
                                        <a href="/blog-details-3" class="post-btn">Read More <i class="far fa-long-arrow-right"></i></a>
                                    </div>
                                </div>

                                <div class="single-blog-post">
                                    <div class="post-thumbnail">
                                        <img src="assets/img/blog/taskmo-blog-4.jpeg" alt="Image" />
                                    </div>
                                    <div class="post-content">
                                        <ul class="post-meta">
                                            <li>
                                                <a href="#"><i class="far fa-calendar-alt"></i> 26 Oct 2021</a>
                                            </li>
                                        </ul>
                                        <h3 class="post-title">
                                            <a href="blog-details-4">Taskmo - The Best Background Verification Service Provider</a>
                                        </h3>
                                        <p>
                                            As per a new study conducted by the organisation, the details that uncovered that, 98% of organizations and associations do perform background checks on the new comers.
                                        </p>
                                        <a href="/blog-details-4" class="post-btn">Read More <i class="far fa-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4">
                            <div class="primary-sidebar">
                 
                                <div class="widget category-widget">
                                    <h4 class="widget-title">Category</h4>
                                    <ul class="category-link">
                                        <li><a href="#">BTL Marketing</a></li>
                                        <li><a href="#">Customer Acquisition</a></li>
                                        <li><a href="#"> Sampling & Merchandising</a></li>
                                        <li><a href="#">Customer Service</a></li>
                                        <li><a href="#">Warehouse Operations</a></li>
                                        <li><a href="#">Inventory Maintainence</a></li>
                                        <li><a href="#">Vendor & Merchant Diligence</a></li>
                                        <li><a href="#">Events & Hospitality</a></li>
                                        <li><a href="#">Audits & Surveys</a></li>
                                        <li><a href="#">Delivery Fleet</a></li>

                                    </ul>
                                </div>
                                <div class="widget cta-widget" style={{ backgroundImage: `url(assets/img/blog/cta-widget.jpg)` }}>
                                    <h4 class="cta-title">Get Free  Consultations</h4>
                                    <span class="subtitle">Special advisors</span>
                                    <p>Quis autem vel eum iure repreh ende lorem</p>

                                    <a href="#" class="cta-btn">Let’s Talk SEO <i class="far fa-long-arrow-right"></i></a>
                                </div>
                                <div class="widget widget-tag-cloud">
                                    <h4 class="widget-title">Popular Tags</h4>
                                    <div class="tags">


                                        <a href="#">Man Power</a>
                                        <a href="#">Hiring</a>
                                        <a href="#">Supply Chain</a>
                                        <a href="#">Gig Economy</a>
                                        <a href="#">Future Of Work</a>
                                        <a href="#">Customer Acquisition</a>
                                        <a href="#">Startups</a>
                                        <a href="#">BTL Activation</a>
                                        <a href="#">Marketing Strategies</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <div style={{ marginTop: "50px" }} class="blog-page-white-bg blog-v3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="feature-blog-three">
                                <div class="post-meta">
                                    <img src="assets/img/blog/taskmo-blog-1.png" alt="Image" />
                                    <div class="post">
                                        <div class="date">11 Nov 2021</div>
                                        <h3><a href="blog-details-v1.html" class="title">Taskmo - The Future of Gig Works</a></h3>
                                        <p>
                                            A gig economy essentially refers to a free market economy that consists of individuals who create a career for themselves based on the skills they possess or the job they are ready to perform.
                                        </p>
                                        <a href="blog-details-v1.html" class="read-more">
                                            <span>Continue Reading</span>
                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="post-meta">
                                    <img src="assets/img/blog/taskmo-blog-2.jpeg" alt="Image" />
                                    <div class="post">
                                        <div class="date">06 Nov 2021</div>
                                        <h3><a href="blog-details-v1.html" class="title">What is Gig Marketplace All About?</a></h3>
                                        <p>
                                            Are you one of them who has taken a ride in Uber, ordered your dinner through Zomato and sold your pre-loved items through Meesho?
                                        </p>
                                        <a href="blog-details-v1.html" class="read-more">
                                            <span>Continue Reading</span>
                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>

                                <div class="post-meta">
                                    <img src="assets/img/blog/taskmo-blog-3.jpeg" alt="Image" />
                                    <div class="post">
                                        <div class="date">02 Nov 2021</div>
                                        <h3><a href="blog-details-v1.html" class="title">What is Gig Economy? Which is the Best Gig Economy Company in India?</a></h3>
                                        <p>
                                            Gig Economy essentially refers to a free market economy where employers hire employees, independent contractors, temporary workers for either short-term or long-term or until the need exists.
                                        </p>
                                        <a href="blog-details-v1.html" class="read-more">
                                            <span>Continue Reading</span>
                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="post-meta">
                                    <img src="assets/img/blog/taskmo-blog-4.jpeg" alt="Image" />
                                    <div class="post">
                                        <div class="date">26 Oct 2021</div>
                                        <h3><a href="blog-details-v1.html" class="title">Taskmo - The Best Background Verification Service Provider</a></h3>
                                        <p>
                                            As per a new study conducted by the organisation, the details that uncovered that, 98% of organizations and associations do perform background checks on the new comers.
                                        </p>
                                        <a href="blog-details-v1.html" class="read-more">
                                            <span>Continue Reading</span>
                                            <i class="fa fa-angle-right" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="page-pagination-one pt-15">
                                <ul class="d-flex align-items-center">
                                    <li><a href="#"><i class="fa fa-angle-left" aria-hidden="true"></i></a></li>
                                    <li><a href="#" class="active">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li> &nbsp; ... &nbsp;</li>
                                    <li><a href="#">13</a></li>
                                    <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="blog-sidebar-one">
                                <div class="sidebar-search-form mb-85">
                                    <form action="#">
                                        <input type="text" placeholder="Search" />
                                        <button><img src="images/icon/51.svg" alt="" /></button>
                                    </form>
                                </div>
                                <div class="sidebar-categories mb-85">
                                    <h4 class="sidebar-title">Categories</h4>
                                    <ul>
                                    <li><a href="#">BTL Marketing</a></li>
                                        <li><a href="#">Customer Acquisition</a></li>
                                        <li><a href="#"> Sampling & Merchandising</a></li>
                                        <li><a href="#">Customer Service</a></li>
                                        <li><a href="#">Warehouse Operations</a></li>
                                        <li><a href="#">Inventory Maintainence</a></li>
                                        <li><a href="#">Vendor & Merchant Diligence</a></li>
                                        <li><a href="#">Events & Hospitality</a></li>
                                        <li><a href="#">Audits & Surveys</a></li>
                                        <li><a href="#">Delivery Fleet</a></li>
                                    </ul>
                                </div>
                                <div class="sidebar-recent-news mb-85">
                                    <h4 class="sidebar-title">Recent Blogs</h4>
                                    <ul>
                                        <li><a href="blog-details-v1.html">
                                            <span class="title">Taskmo - The Future of Gig Works</span>
                                            <span class="date">10 Nov, 2021</span>
                                        </a></li>
                                        <li><a href="blog-details-v1.html">
                                            <span class="title">What is Gig Marketplace All About?</span>
                                            <span class="date">06 Nov, 2021</span>
                                        </a></li>
                                        <li><a href="blog-details-v1.html">
                                            <span class="title">What is Gig Economy? Which is the Best Gig Economy Company in India?</span>
                                            <span class="date">02 Nov, 2021</span>
                                        </a></li>
                                    </ul>
                                </div>
                                <div class="sidebar-keyword">
                                    <h4 class="sidebar-title">Keywords</h4>
                                    <ul class="cleafix">
                                        <li><a href="#">Man Power</a></li>
                                        <li><a href="#">Hiring</a></li>
                                        <li><a href="#">Supply Chain</a></li>
                                        <li><a href="#">Gig Economy</a></li>
                                        <li><a href="#">Future Of Work</a></li>
                                        <li><a href="#">Customer Acquisition</a></li>
                                        <li><a href="#">Startups</a></li>
                                        <li><a href="#">BTL Activation</a></li>
                                        <li><a href="#">Marketing Strategies</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="fancy-short-banner-three mt-200 md-mt-150">
                <div class="container">
                    <div class="bg-wrapper">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="title-style-one">
                                    <h6 class="font-rubik" style={{ color: "#F96F60" }}>News Letter</h6>
                                    <h2>Subscribe to our news letter.</h2>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-wrapper">
                                    <form action="#">
                                        <input type="text" placeholder="Email address" />
                                        <button>Start trial</button>
                                    </form>
                                    <p class="font-rubik">Already subscribe? <a href="login.html">Sign in.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
