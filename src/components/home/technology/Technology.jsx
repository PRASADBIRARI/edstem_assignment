import React from 'react'

export default function Technology() {
    return (
        <div style={{backgroundColor:"white"}} class="font-montserrat fancy-feature-eighteen" id="feature">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 m-auto">
                        <div class="text-center" data-aos="fade-up" data-aos-duration="1200">
                            <h2 class="font-montserrat fw-600 fs-50">Technology</h2>
                        </div>
                    </div>
                </div>

                <ul class="nav nav-tabs justify-content-center" data-aos="fade-up" data-aos-duration="1200">
                    <li class="nav-item">
                        <a class="nav-link d-flex align-items-center justify-content-center active" data-toggle="tab" href="#ft1">
                            <img width="40" src="assets/technology/kpi_analysis 2.svg" alt="" class="current tran3s" />
                            <img width="40" src="assets/technology/kpi_analysis.svg" alt="" class="hover tran3s" />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-flex align-items-center justify-content-center" data-toggle="tab" href="#ft2">
                            <img width="40" src="assets/technology/ai_training 2.svg" alt="" class="current tran3s" />
                            <img width="40" src="assets/technology/ai_training.svg" alt="" class="hover tran3s" />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-flex align-items-center justify-content-center" data-toggle="tab" href="#ft3">
                            <img width="40" src="assets/technology/geo_tracking 2.svg" alt="" class="current tran3s" />
                            <img width="40" src="assets/technology/geo_tracking.svg" alt="" class="hover tran3s" />
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-flex align-items-center justify-content-center" data-toggle="tab" href="#ft4">
                            <img width="40" src="assets/technology/daily_insight 2.svg" alt="" class="current tran3s" />
                            <img width="40" src="assets/technology/daily_insight.svg" alt="" class="hover tran3s" />
                        </a>
                    </li>
                </ul>
            </div>

            <div style={{ backgroundColor: "#673695" }} class="tab-content" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
                <div class="tab-pane active" id="ft1">
                    <div class="row no-gutters align-items-center">
                        <div class="col-md-6">
                            <div class="img-holder">
                                <img src="assets/technology/KPI Analysis.png" alt="" />
                         
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="text-wrapper ">
                                <h4 class="font-montserrat cl-white">KPI Analysis</h4>
                                <p style={{ color:'white',fontSize:"22px" }}>Our platform analyzes and drafts your goals, sets up your questions to measure them against the outcome you want to achieve.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="ft2">
                    <div class="row no-gutters align-items-center">
                        <div class="col-md-6">
                            <div class="img-holder">
                            <img src="assets/technology/AI based live training & assesment.png" alt="" />
                          
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="text-wrapper">
                                <h4 class="font-montserrat cl-white">AI based Training & Assesment</h4>
                                <p style={{ color:'white',fontSize:"22px" }}>All our taskers are trained and assessed through our highly interactive platform to help them perform tasks in a smooth and efficient manner.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="ft3">
                    <div class="row no-gutters align-items-center">
                        <div class="col-md-6">
                            <div class="img-holder">
                            <img src="assets/technology/Geo based Task routing.png" alt="" />
                              
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="text-wrapper">
                                <h4 class="font-montserrat cl-white">Geo based Task Routing</h4>
                                <p style={{ color:'white',fontSize:"22px" }}>The taskers will be assigned to work on the specific locations using our high-end routing algorithm to ensure instant completion of tasks.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="ft4">
                    <div class="row no-gutters align-items-center">
                        <div class="col-md-6">
                            <div class="img-holder">
                            <img src="assets/technology/Daily Insights.png" alt="" />
                                
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="text-wrapper">
                                <h4 class="font-montserrat cl-white">Daily Insights</h4>
                                <p style={{ color:'white',fontSize:"22px" }}>Our new-age dashboard enables you to identify problem areas, take instant action and boost efficiency of the taskforce, in real-time.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            {/* <img src="images/shape/175.svg" alt="" class="shapes shape-right" />
            <img src="images/shape/176.svg" alt="" class="shapes shape-left" /> */}
        </div>
    )
}
