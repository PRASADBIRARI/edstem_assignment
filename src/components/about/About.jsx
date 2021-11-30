import React from 'react'
import { useEffect } from 'react'

export default function About() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
        {/* // <div>
        //     <section class="feature-section section-gap">
        //         <div class="container">
        //             <div class="row align-items-center justify-content-center">
        //                 <div class="col-lg-6 col-md-10">
        //                         <div class="section-heading mb-20">
        //                             <h2 class="title">Our Story</h2>
        //                         </div>
        //                         <div class="feature-lists">


        //                             <div class="content">
        //                                 <p>
        //                                     Taskmo, formerly known as FeedMyPockets, is a “tech-driven on-demand task fulfilment platform” that helps large businesses, corporations, personal brands and even startups and helps in employing gig workers to perform tasks. Our sole mission is to make jobs accessible to everyone at the global level. Taskmo focuses on digitizing all gig jobs for the next billion internet users.
        //                                 </p>
        //                                 <br/>
        //                                 <p>
        //                                     Taskmo’s workforce is a marketplace that consists of digitally trained skilled and semi-skilled professionals who are ready to enter the gig economy and work consistently for week-long engagements or until the need exists. We are proud to say that Taskmo has worked with several popular brands across diverse industries such as e-commerce, FMCG, Retail, Food tech, Warehousing, Events, Marketing, Healthcare, and so much more.

        //                                 </p>
        //                             </div>
        //                         </div>
        //                 </div>
        //                 <div class="col-lg-6 col-md-9">
        //                     <div class="feature-img text-lg-right text-center content-mt-md-50">
        //                         <img src="assets/img/illustrations/feature-illustration.png" alt="Image" class="animate-float-bob-y" />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>

        //     <div class="section-heading text-center mb-30">
        //         <h2 class="title">Our Leadership Team</h2>
        //     </div>
        //     <section class="team-section section-gap-bottom">
        //         <div class="container-fluid container-1600">
        //             <div class="row team-member-items">
        //                 <div class="col-xl-3 col-lg-4 col-sm-6">
        //                     <div class="member-item mt-30">
        //                         <div class="member-photo">
        //                             <img src="assets/img/team-member/01.jpg" alt="Image One" />
        //                             <ul class="social-icons">
        //                                 <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        //                             </ul>
        //                         </div>
        //                         <h4 class="name"><a href="#">Prashant  Janadri</a></h4>
        //                         <span class="title">Founder</span>
        //                     </div>
        //                 </div>
        //                 <div class="col-xl-3 col-lg-4 col-sm-6">
        //                     <div class="member-item mt-30">
        //                         <div class="member-photo">
        //                             <img src="assets/img/team-member/02.jpg" alt="Image One" />
        //                             <ul class="social-icons">
        //                                 <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        //                             </ul>
        //                         </div>
        //                         <h4 class="name"><a href="#">Naveen Ramchandra</a></h4>
        //                         <span class="title">Founder</span>
        //                     </div>
        //                 </div>
        //                 <div class="col-xl-3 col-lg-4 col-sm-6">
        //                     <div class="member-item mt-30">
        //                         <div class="member-photo">
        //                             <img src="assets/img/team-member/03.jpg" alt="Image One" />
        //                             <ul class="social-icons">
        //                                 <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        //                             </ul>
        //                         </div>
        //                         <h4 class="name"><a href="#">Suraj Moraje</a></h4>
        //                         <span class="title"> Taskmo Mentor</span>
        //                     </div>
        //                 </div>
        //                 <div class="col-xl-3 col-lg-4 col-sm-6">
        //                     <div class="member-item mt-30">
        //                         <div class="member-photo">
        //                             <img src="assets/img/team-member/04.jpg" alt="Image One" />
        //                             <ul class="social-icons">
        //                                 <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        //                             </ul>
        //                         </div>
        //                         <h4 class="name"><a href="#">Guruprasad Srinivasan</a></h4>
        //                         <span class="title"> Board of Director</span>
        //                     </div>
        //                 </div>
        //                 <div class="col-xl-3 col-lg-4 col-sm-6">
        //                     <div class="member-item mt-30">
        //                         <div class="member-photo">
        //                             <img src="assets/img/team-member/05.jpg" alt="Image One" />
        //                             <ul class="social-icons">
        //                                 <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        //                             </ul>
        //                         </div>
        //                         <h4 class="name"><a href="#">Lohit Bhatiya</a></h4>
        //                         <span class="title"> Taskmo Mentor</span>
        //                     </div>
        //                 </div>
        //                 <div class="col-xl-3 col-lg-4 col-sm-6">
        //                     <div class="member-item mt-30">
        //                         <div class="member-photo">
        //                             <img src="assets/img/team-member/06.jpg" alt="Image One" />
        //                             <ul class="social-icons">
        //                                 <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        //                             </ul>
        //                         </div>
        //                         <h4 class="name"><a href="#">Chandra Sekhar Garisa</a></h4>
        //                         <span class="title">Board of Director</span>
        //                     </div>
        //                 </div>
        //                 <div class="col-xl-3 col-lg-4 col-sm-6">
        //                     <div class="member-item mt-30">
        //                         <div class="member-photo">
        //                             <img src="assets/img/team-member/07.jpg" alt="Image One" />
        //                             <ul class="social-icons">
        //                                 <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        //                             </ul>
        //                         </div>
        //                         <h4 class="name"><a href="#">Vijay Sivaram</a></h4>
        //                         <span class="title"> Taskmo Mentor</span>
        //                     </div>
        //                 </div>
        //                 <div class="col-xl-3 col-lg-4 col-sm-6">
        //                     <div class="member-item mt-30">
        //                         <div class="member-photo">
        //                             <img src="assets/img/team-member/08.jpg" alt="Image One" />
        //                             <ul class="social-icons">
        //                                 <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        //                             </ul>
        //                         </div>
        //                         <h4 class="name"><a href="#">Rupal Sinha</a></h4>
        //                         <span class="title"> Taskmo Mentor</span>
        //                     </div>
        //                 </div>
        //                 <div class="col-xl-3 col-lg-4 col-sm-6">
        //                     <div class="member-item mt-30">
        //                         <div class="member-photo">
        //                             <img src="assets/img/team-member/08.jpg" alt="Image One" />
        //                             <ul class="social-icons">
        //                                 <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        //                             </ul>
        //                         </div>
        //                         <h4 class="name"><a href="#">Jolly Jose</a></h4>
        //                         <span class="title"> Growth Mentor</span>
        //                     </div>
        //                 </div>
        //                 <div class="col-xl-3 col-lg-4 col-sm-6">
        //                     <div class="member-item mt-30">
        //                         <div class="member-photo">
        //                             <img src="assets/img/team-member/08.jpg" alt="Image One" />
        //                             <ul class="social-icons">
        //                                 <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        //                                 <li><a href="#"><i class="fab fa-youtube"></i></a></li>
        //                             </ul>
        //                         </div>
        //                         <h4 class="name"><a href="#">Nitin Gupta</a></h4>
        //                         <span class="title"> Sales Mentor</span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </div> */}



			


		
			<div style={{paddingTop:"50px"}} class="fancy-text-block-nine mt-130 md-mt-80">
				<div class="shapes shape-one"></div>
				<div class="shapes shape-two"></div>
				<div class="shapes shape-three"></div>
				<div class="shapes shape-four"></div>
				<div class="container">
					<div class="title-style-two text-center mb-35 md-mb-10">
						<div class="row">
							<div class="col-lg-10 m-auto">
								<p></p>
								<h2>Our Story</h2>
							</div>
						</div>
					</div>

					<div class="row">
						{/* <div class="col-xl-10 m-auto"> */}
							<p class="text-meta" data-aos="fade-up" data-aos-duration="1200">Taskmo, formerly known as FeedMyPockets, is a “tech-driven on-demand task fulfilment platform” that helps large businesses, corporations, personal brands and even startups and helps in employing gig workers to perform tasks. Our sole mission is to make jobs accessible to everyone at the global level. Taskmo focuses on digitizing all gig jobs for the next billion internet users.</p>
							<p class="text-meta" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">Taskmo’s workforce is a marketplace that consists of digitally trained skilled and semi-skilled professionals who are ready to enter the gig economy and work consistently for week-long engagements or until the need exists. We are proud to say that Taskmo has worked with several popular brands across diverse industries such as e-commerce, FMCG, Retail, Food tech, Warehousing, Events, Marketing, Healthcare, and so much more.</p>
						{/* </div> */}
					</div>
				</div>
			</div> 


			<div class="team-section-two mt-200 md-mt-100">
				<div class="shapes shape-one"></div>
				<div class="shapes shape-two"></div>
				<div class="shapes shape-three"></div>
				<div class="shapes shape-four"></div>
				<div class="container">
					<div class=" align-items-center justify-content-between mb-80">
							<div style={{textAlign:"center"}}  class="title-style-two">
								<h2>Our Leadership Team</h2>
							</div>
					</div>

					<div class="row">
						<div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
							<div class="team-member" onclick="location.href='team-single.html';">
								<img src="images/media/img_29.png" alt=""/>
								<div class="name">Prashant Janadri</div>
								<div class="position">Founder</div>
							</div> 
						</div>
						<div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
							<div class="team-member" onclick="location.href='team-single.html';">
								<img src="images/media/img_30.png" alt=""/>
								<div class="name">Naveen Ramchandra</div>
								<div class="position">Founder</div>
							</div>
						</div>
						<div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
							<div class="team-member" onclick="location.href='team-single.html';">
								<img src="images/media/img_31.png" alt=""/>
								<div class="name">Suraj Moraje</div>
								<div class="position">Taskmo Mentor</div>
							</div>
						</div>
						<div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
							<div class="team-member" onclick="location.href='team-single.html';">
								<img src="images/media/img_32.png" alt=""/>
								<div class="name">Guruprasad Srinivasan</div>
								<div class="position">Board of Director</div>
							</div> 
						</div>

                        <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
							<div class="team-member" onclick="location.href='team-single.html';">
								<img src="images/media/img_34.png" alt=""/>
								<div class="name">Lohit Bhatiya</div>
								<div class="position">Taskmo Mentor</div>
							</div> 
						</div>


						<div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
							<div class="team-member" onclick="location.href='team-single.html';">
								<img src="images/media/img_33.png" alt=""/>
								<div class="name">Chandra Sekhar Garisa</div>
								<div class="position">Board of Director</div>
							</div> 
						</div>
						<div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
							<div class="team-member" onclick="location.href='team-single.html';">
								<img src="images/media/img_34.png" alt=""/>
								<div class="name">Vijay Sivaram</div>
								<div class="position">Taskmo Mentor</div>
							</div> 
						</div>
                        <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
							<div class="team-member" onclick="location.href='team-single.html';">
								<img src="images/media/img_34.png" alt=""/>
								<div class="name">Rupal Sinha</div>
								<div class="position">Taskmo Mentor</div>
							</div> 
						</div>
                        <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
							<div class="team-member" onclick="location.href='team-single.html';">
								<img src="images/media/img_34.png" alt=""/>
								<div class="name">Jolly Jose</div>
								<div class="position">Growth Mentor</div>
							</div> 
						</div>
                        <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
							<div class="team-member" onclick="location.href='team-single.html';">
								<img src="images/media/img_34.png" alt=""/>
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
