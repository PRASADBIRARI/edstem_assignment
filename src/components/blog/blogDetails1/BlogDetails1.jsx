import { textAlign } from '@mui/system'
import React from 'react'
import { useEffect } from 'react'

export default function BlogDetails1() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            {/* <!--====== Page Title Area Start ======--> */}
            <div class="page-title-area container">

                <ul style={{ width: "215px" }} class="breadcrumb-nav">
                    <li><a href="/blog">Blog</a></li>
                    <li>Blog Details</li>
                </ul>

            </div>
            {/* <!--====== Page Title Area End ======--> */}

            {/* <!--====== Blog Area Started ======--> */}
            <section class="blog-area section-gap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="single-blog-post blog-details-content pr-xl-5">
                                <div class="post-thumbnail">
                                    <img src="assets/img/blog/taskmo-blog-1.png" alt="Image" />
                                </div>
                                <div class="post-content">
                                    <div class="post-categories">
                                        <a href="#">Marketing</a>
                                    </div>
                                    <ul class="post-meta">
                                        <li>
                                            <a href="#"><i class="far fa-calendar-alt"></i> 11 Nov 2021</a>
                                        </li>
                                    </ul>
                                    <h3 class="post-title">
                                        <a href="blog-details.html">Taskmo - The Future of Gig Works</a>
                                    </h3>
                                    <p>
                                        We can all agree that the way we function has turned topsy-turvy during the pandemic. We have all drifted from following the standard work structure to now following a much more hybrid and flexible mode of work that has made all our lives much more efficient. Prior to the pandemic, most of us followed a traditional pattern of work where one worked for a fixed set of hours from the premise of their organisation. With the pandemic and imposition of global lockdowns, it pushed employers and organisations to rethink the way they function and perform their day to day tasks. This shifting work culture led to multiple losses and downfalls in several organisations across different sectors and domains. When businesses were looking for the right solution, the gig economy filled the void.

                                    </p>
                                    <blockquote>
                                        <p>Shoot an email to us at <span><u>business@taskmo.com</u></span> and book a 30-min call with our experts today! </p>
                                        {/* <cite>Rasalina Willamson</cite> */}
                                    </blockquote>
                                    <h3>What is the Gig Economy All About? </h3>
                                    <br/>
                                    <p>
                                        A gig economy essentially refers to a free market economy that consists of individuals who create a career for themselves based on the skills they possess or the job they are ready to perform. Gig economy includes all those individuals such as freelancers, temporary workers, independent contractors, part-time workers, project based employees and all those who do not have a full-time job. The gig economy is increasingly being preferred by companies, corporations, startups and small businesses because of the wide range of benefits it has to offer. For both, employers and gig workers the gig economy is flexible, cost-efficient and has equal benefits for all parties.

                                    </p>
                                    <br/>
                                    <p>
                                        One might now ask, what’s the difference between a gig worker and a full-time employee. Some of the glaring differences between a gig worker and full-time employee is the duration of their work. A gig worker often works on the longevity of the task that must be completed, while a full-time employee works for a specific duration every day and has a fixed period of time every week. A full-time employee often has a fixed compensation that he receives at the end of every month however that is not applicable to a gig worker. A gig worker is usually paid according to the need or the longevity of the task. In some cases, a gig worker (based on the assignment) is paid according to an hour or per day or he or she even receives a lump sum upon the completion of the project. Another important difference is that a gig worker is often not entitled to receive certain employee benefits, while a full time employee automatically receives a great deal of benefits. In addition to that, there are several other differences between gig workers and full time workers which include their ability to take up multiple jobs,flexible working hours and so much more.

                                    </p>
                                    <br/>
                                    <h3>Blue Collar Jobs and Gig Economy</h3>
                                    <br/>

                                    <p>
                                        When one looks into the gig economy, one can easily notice a pattern of the availability of multiple blue collar jobs in the gig economy. Studies have shown that the gig economy has led to a whopping increase of 80% for blue collar jobs. Before we speak about the relationship between blue collar jobs and the gig economy of India, let us define blue collar jobs and the elements that it includes.

                                    </p>
                                    <br/>
                                    
                                    <h3>What are Blue Collar Jobs? </h3>
                                    <br/>
                                    <p>Blue collar jobs refers to all kinds and types of jobs that involve manual work or some sort of manual labour. Most blue collar jobs do not require individuals to have a college degree, in most cases, it might require them to have a basic set of qualifications such as a high school degree or even any developmental certificate. Unlike, white collar job employees who work within an organization, those individuals who perform blue collar jobs tend to work on ground (i.e. in field setups). </p>
                                    <br/>
                                    <p>Here comes the question, how does the gig economy employ a higher percentage of gig workers in the blue collar job sector when compared to white collar jobs? The major reason behind this is the increase in demand for those performing blue collar jobs. Several gig jobs such as delivery drivers, food delivery executives, product samplers, survey collectors, pharma delivery executives often are less educated but are apt to fill in the need at the right time in the right place. This demand for blue collar jobs has led to an increase in the gig economy offering gig workers who perform the similar type of jobs. Several businesses that look to hire individuals often prefer to hire workers who perform blue collar jobs as they are required only for a shorter period of time and does not involve much risk on the employer's end. With the increase in the number of gig economy aggregators, several businesses, startups and even large corporations can easily benefit by hiring the necessary gig workers flexibly.</p>
                                    <br />
                                    <h3>                                   
                                         Which is the best Blue Collar Startup in India?
                                    </h3>
                                    <br />

                                    <p>
                                        Over the course of this article, we’ve spoken about blue collar services and how blue collar jobs are highly preferred in the gig economy. Now comes the bigger question: Which is the best blue collar startup in India? There are several gig economy blue collar startups that offer one or two services to large businesses. If asked to point out, Taskmo is one of among the best blue collar startups in India. Taskmo, a B2B blue collar startup offers specialised on-demand services to businesses of all sizes. From background verification, merchant onboarding, product sampling and any other customised service Taskmo offers it all! Visit www.taskmo.com today to learn more.
                                    </p>
                                    {/* 
                                    <div class="content-footer">
                                        <ul class="related-tags">
                                            <li class="title">Tags:</li>
                                            <li><a href="#">Agency</a></li>
                                            <li><a href="#">Cosmetics</a></li>
                                            <li><a href="#">Beauty</a></li>
                                        </ul>
                                        <ul class="post-share">
                                            <li class="title">Share:</li>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                        <div class="post-author">
                                            <div class="author-photo">
                                                <img src="assets/img/blog/author.jpg" alt="Image" />
                                            </div>
                                            <div class="author-content">
                                                <h4 class="name">Rasalina Wilimson</h4>
                                                <p>
                                                    Quis autem eum reprehenderit voluptate esse quam molestiae consequatu dolorem voluptas nulla pariano rejects
                                                </p>

                                                <ul class="share-links">
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="post-nav">
                                            <div class="prev-post">
                                                <div class="post-thumb">
                                                    <img src="assets/img/blog/post-nav-prev.jpg" alt="Image" />
                                                </div>
                                                <div class="content">
                                                    <h6>How Deal With Back During Pregn</h6>
                                                    <span>25 May 2021</span>
                                                </div>
                                            </div>
                                            <div class="next-post">
                                                <div class="post-thumb">
                                                    <img src="assets/img/blog/post-nav-next.jpg" alt="Image" />
                                                </div>
                                                <div class="content">
                                                    <h6>Online Environme Work Older See</h6>
                                                    <span>25 May 2021</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                    {/* 
                                    <div class="comment-template">
                                        <h4 class="template-title">Peopel Comments</h4>

                                        <ul class="comment-list">
                                            <li>
                                                <div class="comment-body">
                                                    <div class="author-thumb">
                                                        <img src="assets/img/blog/comment-author-01.jpg" alt="Image" />
                                                    </div>
                                                    <div class="comment-content">
                                                        <h6 class="name">
                                                            John F. Medina
                                                            <span class="comment-date">25 May 2021</span>
                                                        </h6>
                                                        <p>
                                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium totam rem aperiam
                                                        </p>

                                                        <a href="#" class="reply-link">Reply <i class="far fa-long-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                                <ul class="children">
                                                    <li>
                                                        <div class="comment-body">
                                                            <div class="author-thumb">
                                                                <img src="assets/img/blog/comment-author-02.jpg" alt="Image" />
                                                            </div>
                                                            <div class="comment-content">
                                                                <h6 class="name">
                                                                    Jeffrey T. Kelly
                                                                    <span class="comment-date">25 May 2021</span>
                                                                </h6>
                                                                <p>
                                                                    Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                                                                </p>

                                                                <a href="#" class="reply-link">Reply <i class="far fa-long-arrow-right"></i></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div class="comment-body">
                                                    <div class="author-thumb">
                                                        <img src="assets/img/blog/comment-author-03.jpg" alt="Image" />
                                                    </div>
                                                    <div class="comment-content">
                                                        <h6 class="name">
                                                            Richard B. Zellmer
                                                            <span class="comment-date">25 May 2021</span>
                                                        </h6>
                                                        <p>
                                                            Unde omnis iste natus error sit voluptate accusantium dolore mque laudantium totam rem aperiam
                                                        </p>

                                                        <a href="#" class="reply-link">Reply <i class="far fa-long-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="comment-form">
                                            <h4 class="template-title">Leave A Message</h4>

                                            <form action="#">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="input-field mb-30">
                                                            <input type="text" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <div class="input-field mb-30">
                                                            <input type="email" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="input-field mb-30">
                                                            <textarea placeholder="Write Comment"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12">
                                                        <div class="input-field">
                                                            <button type="submit" class="template-btn">Leave a Comments <i class="far fa-long-arrow-right"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div> */}
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
                                <div class="widget latest-post-widget">
                                    <h4 class="widget-title">Latest Blogs</h4>
                                    <div class="popular-posts-wrapper">
                                        <div class="popular-posts-item">
                                            <div class="popular-posts-thumbnail">
                                                <a href="blog-details.html">
                                                    <img src="assets/img/blog/latest-post-thumbnail-1.jpg"
                                                        alt="latest post one" />
                                                </a>
                                            </div>
                                            <div class="popular-posts-item-content">
                                                <h5 class="popular-posts-title"><a href="blog-details.html">Build Seamless
                                                    Spreadshet Import Experience</a></h5>
                                                <a href="#" class="posts-date"><i class="far fa-calendar-alt"></i> 25 May
                                                    2021</a>
                                            </div>
                                        </div>
                                        <div class="popular-posts-item">
                                            <div class="popular-posts-thumbnail">
                                                <a href="blog-details.html">
                                                    <img src="assets/img/blog/latest-post-thumbnail-2.jpg"
                                                        alt="latest post two" />
                                                </a>
                                            </div>
                                            <div class="popular-posts-item-content">
                                                <h5 class="popular-posts-title"><a href="blog-details.html">Creating Online
                                                    Environment Work Well Older</a></h5>
                                                <a href="#" class="posts-date"><i class="far fa-calendar-alt"></i> 25 May
                                                    2021</a>
                                            </div>
                                        </div>
                                        <div class="popular-posts-item">
                                            <div class="popular-posts-thumbnail">
                                                <a href="blog-details.html">
                                                    <img src="assets/img/blog/latest-post-thumbnail-3.jpg"
                                                        alt="latest post three" />
                                                </a>
                                            </div>
                                            <div class="popular-posts-item-content">
                                                <h5 class="popular-posts-title"><a href="blog-details.html">Signs Website Feels
                                                    More Haunted House</a></h5>
                                                <a href="#" class="posts-date"><i class="far fa-calendar-alt"></i> 25 May
                                                    2021</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget cta-widget" style={{ backgroundImage: `url(assets/img/blog/cta-widget.jpg)` }}>
                                    <h4 class="cta-title">Get Free Consultations</h4>
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
                                <div class="widget cta-widget" style={{ backgroundImage: `url(assets/img/blog/cta-widget.jpg)` }}>
                                    <h4 class="cta-title">Get Free Consultations</h4>
                                    <span class="subtitle">Special advisors</span>
                                    <p>Quis autem vel eum iure repreh ende lorem</p>

                                    <a href="#" class="cta-btn">Let’s Talk SEO <i class="far fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== Blog Area End ======--> */}
        </div>
    )
}
