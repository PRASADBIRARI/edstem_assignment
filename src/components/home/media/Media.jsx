import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function LeftButton(props) {

    // console.log("imageIndex", imageIndex);
    return (
        <section class="font-montserrat centerAlign" style={{ paddingBottom: "100px" }}>
            {/* <p style={{ paddingBottom: "30px" }}>PRESS</p> */}

            <div class="section-heading text-center ">
                <h2 class="font-montserrat fw-600 fs-50">Latest Media Features and Awards</h2>
            </div>

            <div class=" lg-container pt-160 md-pt-100">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6" data-aos="fade-up" data-aos-duration="1200">
                            <div class="block-style-twentySix text-center mb-40" style={{background:"#E8FBFF"}}>
                                <h6 class="font-montserrat" style={{fontSize:"22px",color:"#8BBDC8"}}>The Economic Times</h6>
                                <h4 class="font-montserrat">More women go big on gig during Covid pandemic, better jobs now available</h4>
                                <a href="#" class="try-btn" style={{borderColor:"#C0E9F2", fontWeight:"600",fontSize:"18px"}}>Read More</a>
                                <img src="images/shape/222.jpg" alt="" class="shapes shape-one" />
                                <img src="images/shape/223.jpg" alt="" class="shapes shape-two" />
                            </div>
                        </div>
                        <div class="col-md-6" data-aos="fade-up" data-aos-duration="1200">
                            <div class="block-style-twentySix text-center mb-40" style={{background:"#FFEFE7"}}>
                                <h6 class="font-montserrat" style={{fontSize:"22px",color:"#DCAC91"}}>Times Of India</h6>
                                <h4 class="font-montserrat">How an auto-ride inspired two IT professionals to start a jobs platform.</h4>
                                <a href="#" class="try-btn" style={{borderColor:"#F5D1BD",fontWeight:"600" ,fontSize:"18px"}}>Read More</a>
                                <img src="images/shape/224.jpg" alt="" class="shapes shape-one" />
                                <img src="images/shape/225.jpg" alt="" class="shapes shape-two" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <div class="fancy-feature-twentySix lg-container pt-160 md-pt-100">
        // <div class="container">
        //     <div class="row">
        //         <div class="col-md-6" data-aos="fade-right">
        //             <div class="block-style-twentySix text-center mb-40" style={{ background: "#E8FBFF" }}>
        //                 <h6 style={{ color: "#8BBDC8" }}>Deski eSignature</h6>
        //                 <h4>Join 1,000,000 customers & hundreds of millions of signers</h4>
        //                 <a href="#" class="try-btn" style={{ borderColor: "#C0E9F2" }}>Try it Free</a>
        //                 <img src="images/shape/222.jpg" alt="" class="shapes shape-one" />
        //                 <img src="images/shape/223.jpg" alt="" class="shapes shape-two" />
        //             </div>
        //         </div>
        //         <div class="col-md-6" data-aos="fade-left">
        //             <div class="block-style-twentySix text-center mb-40" style={{ background: "#FFEFE7" }}>
        //                 <h6 style={{ color: "#DCAC91" }}>Agreement Cloud</h6>
        //                 <h4>Connect and automate your entire agreement process.</h4>
        //                 <a href="#" class="try-btn" style={{ borderColor: "#F5D1BD" }}>Try it Free</a>
        //                 <img src="images/shape/224.jpg" alt="" class="shapes shape-one" />
        //                 <img src="images/shape/225.jpg" alt="" class="shapes shape-two" />
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // </div>
    );
}
