import React from 'react'
import { useHistory } from 'react-router';

export default function LatestBlogs() {
    const history = useHistory()

    const handleBackBlog = () => {
        history.push('/blog')
    };
    return (
        <div>
            <div class="font-montserrat feature-blog-one blog-page-bg">
                <div class="section-heading text-center mb-20">
                    <h2 class="font-montserrat fs-50 fw-600">Latest Blog</h2>
                </div>
                <div class="shapes shape-one"></div>
                <div class="shapes shape-two"></div>
                <div class="shapes shape-three"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200">
                            <div class="post-meta">
                                <img src="assets/img/blog/taskmo-blog-1.png" alt="" class="image-meta" />
                                <div class="font-montserrat tag">Technology</div>
                                <h3><a href="blog-details-v1.html" class="font-montserrat title">Taskmo - The Future of Gig Works</a></h3>
                                <a href="blog-details-v1.html" class="read-more d-flex justify-content-between align-items-center">
                                    <span>Read More</span>
                                    <i class="flaticon-right-arrow"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
                            <div class="post-meta">
                                <img src="assets/img/blog/taskmo-blog-2.jpeg" alt="" class="image-meta" />
                                <div class="font-montserrat tag">Software</div>
                                <h3><a href="blog-details-v1.html" class="font-montserrat title">What is Gig Marketplace All About?</a></h3>
                                <a href="blog-details-v1.html" class="read-more d-flex justify-content-between align-items-center">
                                    <span>Read More</span>
                                    <i class="flaticon-right-arrow"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                            <div class="post-meta">
                                <img src="assets/img/blog/taskmo-blog-3.jpeg" alt="" class="image-meta" />
                                <div class="font-montserrat tag">Blog</div>
                                <h3><a href="blog-details-v1.html" class="font-montserrat title">The Best Gig Economy Company in India?</a></h3>
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
