import React from 'react'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {




    useEffect(() => {
        window.scrollTo(0, 0)
        AOS.init({
            duration: 2000
        });
    }, [])
    return (
        <>



            <div style={{ paddingTop: "50px" }} class="font-montserrat fancy-text-block-nine mt-130 md-mt-80">
                <div class="shapes shape-one"></div>
                <div class="shapes shape-two"></div>
                <div class="shapes shape-three"></div>
                <div class="shapes shape-four"></div>
                <div class="container">
                    <div class="title-style-two text-center mb-35 md-mb-10">
                        <div class="row">
                            <div class="col-lg-10 m-auto">
                                <p></p>
                                <h2 class="font-montserrat fw-600">Our Story</h2>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        {/* <div class="col-xl-10 m-auto"> */}
                        <p class="fs-22 text-meta" data-aos="fade-up" data-aos-duration="1200">Taskmo, formerly known as FeedMyPockets, is a “tech-driven on-demand task fulfilment platform” that helps large businesses, corporations, personal brands and even startups and helps in employing gig workers to perform tasks. Our sole mission is to make jobs accessible to everyone at the global level. Taskmo focuses on digitizing all gig jobs for the next billion internet users.</p>
                        <p class="fs-22 text-meta" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">Taskmo’s workforce is a marketplace that consists of digitally trained skilled and semi-skilled professionals who are ready to enter the gig economy and work consistently for week-long engagements or until the need exists. We are proud to say that Taskmo has worked with several popular brands across diverse industries such as e-commerce, FMCG, Retail, Food tech, Warehousing, Events, Marketing, Healthcare, and so much more.</p>
                        {/* </div> */}
                    </div>
                </div>
            </div>


            <div class="font-montserrat team-section-two mt-200 md-mt-100">
                <div class="shapes shape-one"></div>
                <div class="shapes shape-two"></div>
                <div class="shapes shape-three"></div>
                <div class="shapes shape-four"></div>
                <div class="container">
                    <div class=" align-items-center justify-content-between mb-80">
                        <div style={{ textAlign: "center" }} class="title-style-two">
                            <h2 class="font-montserrat fs-50 fw-600">Our Leadership Team</h2>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
                            <div class="team-member" onclick="location.href='team-single.html';">
                                <img src="assets/founders image/Prashant  Janadri.png" alt="" />
                                <div class="name">Prashant Janadri</div>
                                <div class="position">Founder</div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                            <div class="team-member" onclick="location.href='team-single.html';">
                                <img src="assets/founders image/Naveen Ramchandra.png" alt="" />
                                <div class="name">Naveen Ramchandra</div>
                                <div class="position">Founder</div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div class="team-member" onclick="location.href='team-single.html';">
                                <img src="assets/founders image/Suraj Moraje.png" alt="" />

                                <div class="name">Suraj Moraje</div>
                                <div class="position">Taskmo Mentor</div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
                            <div class="team-member" onclick="location.href='team-single.html';">
                                <img src="assets/founders image/Guruprasad Srinivasan.png" alt="" />

                                <div class="name">Guruprasad Srinivasan</div>
                                <div class="position">Board of Director</div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div class="team-member" onclick="location.href='team-single.html';">
                                <img src="assets/founders image/Lohit Bhatia.png" alt="" />

                                <div class="name">Lohit Bhatiya</div>
                                <div class="position">Taskmo Mentor</div>
                            </div>
                        </div>


                        <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                            <div class="team-member" onclick="location.href='team-single.html';">
                                <img src="assets/founders image/Chandra Sekhar Garisa.png" alt="" />

                                <div class="name">Chandra Sekhar Garisa</div>
                                <div class="position">Board of Director</div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div class="team-member" onclick="location.href='team-single.html';">
                                <img src="assets/founders image/Vijay Sivaram.png" alt="" />

                                <div class="name">Vijay Sivaram</div>
                                <div class="position">Taskmo Mentor</div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div class="team-member" onclick="location.href='team-single.html';">
                                <img src="assets/founders image/Rupal Sinha.png" alt="" />

                                <div class="name">Rupal Sinha</div>
                                <div class="position">Taskmo Mentor</div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div class="team-member" onclick="location.href='team-single.html';">
                                <img src="assets/founders image/Jolly Jose.png" alt="" />

                                <div class="name">Jolly Jose</div>
                                <div class="position">Growth Mentor</div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                            <div class="team-member" onclick="location.href='team-single.html';">
                                <img src="assets/founders image/Nitin Gupta.png" alt="" />

                                <div class="name">Nitin Gupta</div>
                                <div class="position">Taskmo Mentor</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </>

    )
}
