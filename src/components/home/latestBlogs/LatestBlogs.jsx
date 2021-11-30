import React from 'react'
import { useHistory } from 'react-router';

export default function LatestBlogs() {
    const history = useHistory()

    const handleBackBlog = () => {
        history.push('/blog')
    };
    return (
        <div>
            {/* <section class="latest-post-section section-gap">
                <div class="container">
                    <div class="section-heading text-center mb-20">
                        <h2 class="title">Latest Blog</h2>
                    </div>

                    <div class="latest-post-bordered">
                        <div class="post-bordered-item">
                            <div class="latest-post-box mt-40">
                                <h4 class="post-title">
                                    <a style={{ cursor: "pointer" }} onClick={handleBackBlog}>Taskmo - The Future of Gig Works</a>
                                </h4>
                                <div class="post-meta">
                                    <a style={{ cursor: "pointer" }} onClick={handleBackBlog}><i class="far fa-calculator"></i>11 Nov 2021</a>
                                </div>
                                <div class="post-thumb">
                                    <img src="assets/img/blog/taskmo-blog-1.png" alt="" />
                                </div>
                                <div class="post-content">
                                    <p>
                                        A gig economy essentially refers to a free market economy that consists of individuals who create a career for themselves based on the skills they possess or the job they are ready to perform.                                    </p>
                                    <a style={{ cursor: "pointer" }} onClick={handleBackBlog} class="template-btn bg-primary-10">Read More <i class="far fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="post-bordered-item">
                            <div class="latest-post-box mt-40">
                                <h4 class="post-title">
                                    <a style={{ cursor: "pointer" }} onClick={handleBackBlog}>What is Gig Marketplace All About?</a>
                                </h4>
                                <div class="post-meta">
                                    <a style={{ cursor: "pointer" }} onClick={handleBackBlog}><i class="far fa-calculator"></i>06 Nov 2021</a>
                                </div>
                                <div class="post-thumb">
                                    <img src="assets/img/blog/taskmo-blog-2.jpeg" alt="" />
                                </div>
                                <div class="post-content">
                                    <p>
                                        Are you one of them who has taken a ride in Uber, ordered your dinner through Zomato and sold your pre-loved items through Meesho?                                  </p>
                                    <a style={{ cursor: "pointer" }} onClick={handleBackBlog} class="template-btn bg-primary-10">Read More <i class="far fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="post-bordered-item">
                            <div class="latest-post-box mt-40">
                                <h4 class="post-title">
                                    <a style={{ cursor: "pointer" }} onClick={handleBackBlog}>The Best Gig Economy Company in India?</a>
                                </h4>
                                <div class="post-meta">
                                    <a style={{ cursor: "pointer" }} onClick={handleBackBlog}><i class="far fa-calculator"></i>02 Nov 2021</a>
                                </div>
                                <div class="post-thumb">
                                    <img src="assets/img/blog/taskmo-blog-4.jpeg" alt="" />
                                </div>
                                <div class="post-content">
                                    <p>
                                        Gig Economy essentially refers to a free market economy where employers hire employees, independent contractors, temporary workers for either short-term or long-term or until the need exists.                                    </p>
                                    <a style={{ cursor: "pointer" }} onClick={handleBackBlog} class="template-btn bg-primary-10">Read More <i class="far fa-long-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}



            <div style={{padding:"80px"}} class="feature-blog-one ">
                <div class="section-heading text-center mb-20">
                    <h2 class="title">Latest Blog</h2>
                </div>

                <div class="shapes shape-one"></div>
                <div class="shapes shape-two"></div>
                <div class="shapes shape-three"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200">
                            <div class="post-meta">
                                <img src="assets/img/blog/taskmo-blog-1.png" alt="" class="image-meta" />
                                <div class="tag">Technology</div>
                                <h3><a href="blog-details-v1.html" class="title">Taskmo - The Future of Gig Works</a></h3>
                                <a href="blog-details-v1.html" class="read-more d-flex justify-content-between align-items-center">
                                    <span>Read More</span>
                                    <i class="flaticon-right-arrow"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
                            <div class="post-meta">
                                <img src="assets/img/blog/taskmo-blog-2.jpeg" alt="" class="image-meta" />
                                <div class="tag">Software</div>
                                <h3><a href="blog-details-v1.html" class="title">What is Gig Marketplace All About?</a></h3>
                                <a href="blog-details-v1.html" class="read-more d-flex justify-content-between align-items-center">
                                    <span>Read More</span>
                                    <i class="flaticon-right-arrow"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                            <div class="post-meta">
                                <img src="assets/img/blog/taskmo-blog-3.jpeg" alt="" class="image-meta" />
                                <div class="tag">Blog</div>
                                <h3><a href="blog-details-v1.html" class="title">The Best Gig Economy Company in India?</a></h3>
                                <a href="blog-details-v1.html" class="read-more d-flex justify-content-between align-items-center">
                                    <span>Read More</span>
                                    <i class="flaticon-right-arrow"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
