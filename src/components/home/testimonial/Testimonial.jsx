import React from 'react'

export default function Testimonial() {
    return (
        <div class="client-feedback-slider-one pt-50 pb-100 md-pb-80">
            <div class="shapes-holder">
                <img src="images/shape/39.svg" alt="" />
                {/* <img src="images/media/img_21.png" alt="" class="cp-img-one" /> */}
                <img src="assets/logo web/bounce.png" alt="" class="cp-img-one" />
                <img src="assets/logo web/dunzo.png" alt="" class="cp-img-two" />
                <img src="assets/logo web/zomato.png" alt=""class="cp-img-three" />
                <img src="assets/logo web/byjus.png" alt="" class="cp-img-four" />
                <div class="title-style-two">
                    <h2 class="font-montserrat fs-40 fw-600">What’s <br />Our Client Say <br />About Us.</h2>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 ml-auto">
                        <div class="feedback-meta">
                            <img src="images/icon/30.svg" alt="" class="icon" />
                            <div class="clientSliderOne">
                                <div class="item">
                                    <p class="font-montserrat">“Taskmo (Formerly Known as FeedMyPockets) has supported us immensely by providing us with temporary gig workers who have helped us achieve all our targets and milestones within a short period of time.”</p>
                                    <div class="d-lg-flex align-items-center">
                                        <img src="images/media/img_20.png" alt="" class="c_img" />
                                        <div class="info font-montserrat">
                                            <strong>Jnanesh</strong> <span>Program Manager, Amazon</span>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                            <ul class="d-flex slider-arrow mt-40">
                                <li class="prev_c"><i class="flaticon-right-arrow"></i></li>
                                <li class="next_c"><i class="flaticon-right-arrow"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
