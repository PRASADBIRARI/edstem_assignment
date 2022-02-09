import React from 'react'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
 

export default function Contact() {

    
    useEffect(() => {
        window.scrollTo(0, 0)
        AOS.init({
            duration : 2000
          });
    }, [])
    return (
        <>
            <div class="fancy-hero-four bg-doc space-fix">
                <div class="bg-wrapper">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-9 col-lg-11 col-md-10 m-auto">
                                <h6 class="font-montserrat">Contact us</h6>
                                <h2 style={{fontSize:"50px"}} class="fw-600">Leverage Your Business With Us!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="font-montserrat contact-style-two">
                <div class="container">
                    <div class="contact-info-wrapper">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-sm-6 d-lg-flex">
                                <div class="address-info">
                                    <div class="icon d-flex align-items-end"><img src="images/icon/44.svg" alt="" /></div>
                                    <div class="title">Location</div>
                                    <p style={{fontSize:"18px"}} class="font-rubik">#33, Mohan chambers, 1st Main Rd, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka, 560078.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 d-lg-flex">
                                <div class="address-info">
                                    <div class="icon d-flex align-items-end"><img src="images/icon/45.svg" alt="" /></div>
                                    <div class="title">Contact</div>
                                    <p style={{fontSize:"18px"}} class="font-rubik">business@taskmo.com <br />+91 8448449069</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 d-lg-flex">
                                <div class="address-info">
                                    <div class="icon d-flex align-items-end"><img src="images/icon/46.svg" alt="" /></div>
                                    <div class="title">Social Media</div>
                                    <p style={{fontSize:"18px"}} class="font-rubik">Find on social media</p>
                                    <ul class="d-flex justify-content-center">
                                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img src="images/shape/64.svg" alt="" class="shapes shape-one" />
                    </div>
                    <div class="form-style-classic mt-150 md-mt-80">
                        <form action="#" id="contact-form" action="inc/contact.php" data-toggle="validator">
                            <div class="messages"></div>
                            <div class="row controls">
                                <div class="col-md-6" data-aos="fade-up" data-aos-duration="1200">
                                    <div class="input-group-meta form-group mb-60">
                                        <label >First Name</label>
                                        <input type="text" name="Fname" required="required" data-error="Name is required." />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-6" data-aos="fade-up" data-aos-duration="1200">
                                    <div class="input-group-meta form-group mb-60">
                                        <label>Last Name</label>
                                        <input type="text"  name="Lname" required="required" data-error="Name is required." />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-12" data-aos="fade-up" data-aos-duration="1200">
                                    <div class="input-group-meta form-group mb-60">
                                        <label>Email Address</label>
                                        <input type="email"  name="email" required="required" data-error="Valid email is required." />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-12" data-aos="fade-up" data-aos-duration="1200">
                                    <div class="input-group-meta form-group lg mb-40">
                                        <label>Your Message</label>
                                        <textarea name="message" required="required" data-error="Please,leave us a message."></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-12" data-aos="fade-up" data-aos-duration="1200"><button style={{fontSize:"18px"}} class="theme-btn-six lg">Send Message</button></div>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>



            {/* <div class="fancy-short-banner-four m0 pt-150 md-pt-100">
                <div class="container">
                    <div class="bg-wrapper">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="title">
                                    <h6>Subscribe Now</h6>
                                    <h2>Subscriber to our Newsletter</h2>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-wrapper">
                                    <form action="#">
                                        <input type="text" placeholder="Email address" />
                                        <button>Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}
