import React from 'react'
import Video from '../../../assets/video/appMockup.mp4'
export default function TaskmoApp() {
    return (
        <>

            <div style={{ background: "#7841A2",color:"white" }} class="fancy-text-block-twentyThree lg-container mt-200 md-mt-90" id="feature">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 order-lg-last" data-aos="fade-left">
                            {/* <div style={{ border: "2px solid red" }} class="img-container position-relative "> */}
                            <video style={{ width: '100%' }} loop autoplay='' muted>
                                <source src={Video} type="video/mp4" />
                            </video>
                            {/* </div> */}
                        </div>
                        <div class="col-lg-6" data-aos="fade-right">
                            <div class="text-wrapper pl-xl-5">
                                <div style={{color:"white"}} class="cl-text">The Taskmo App - India’s Best Job Search App</div>
                                <div class="title-style-twelve">
                                    <h3 style={{ fontSize: "50px",color:"white" }}>Taskmo connect tasker with business.</h3>
                                    <p style={{ fontSize: "22px" }} class="mt-35">With the Taskmo App, one can find a job that interests them in the field of their choice and perform the task right away! The Taskmo App offers part-time jobs, online jobs, blue collar jobs, field based jobs, home based jobs, skill based jobs and so much more. The Taskmo App is the only free job app that helps individuals work comfortably around their own personal schedule.</p>
                                </div>
                                {/* <a href="#" class="theme-btn-eight">Start Free Trial</a> */}
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.feedmypockets&hl=en_IN&gl=US" >
                                    <img style={{ marginLeft: "-18px", height: "90px" }} src="assets/img/google_playstore.png" alt="Play store" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
