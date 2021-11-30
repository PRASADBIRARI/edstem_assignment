import React from 'react'
import { useEffect } from 'react'

export default function DownloadApp() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <div>
            {/* <!--====== Start Hero Area ======--> */}
            <section class="hero-area-three">
                <div class="container">
                    <div class="row align-items-end justify-content-center">
                        <div class="col-xl-5 col-lg-6 col-md-10">
                            <div class="hero-content">
                                <h1 class="hero-title wow fadeInDown" style={{fontSize:"60px"}} data-wow-delay="0.3s">
                                    Download Taskmo App From Playstore
                                </h1>
                                <p class="wow fadeInLeft" data-wow-delay="0.4s">
                                    Enter your phone number to get the link via SMS                                </p>
                                <ul class="hero-btns">
                                    <li class="wow fadeInUp" data-wow-delay="0.5s">
                                        <a href="#" class="template-btn">
                                            Start a Project <i class="far fa-long-arrow-right"></i>
                                        </a>
                                    </li>
                                    <li class="wow fadeInUp" data-wow-delay="0.6s">
                                        <a href="https://www.youtube.com/watch?v=XSGBVzeBUbk" class="video-btn" data-lity>
                                            <i class="fas fa-play"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-6 col-md-9 col-sm-10">
                            <div class="hero-img text-center text-lg-right wow fadeInUp" data-wow-delay="0.3s">
                                <img src="assets/img/hero/hero-illustration-three.png" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== End Hero Area ======--> */}
        </div>
    )
}
