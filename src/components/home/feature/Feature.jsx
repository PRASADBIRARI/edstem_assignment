import React from 'react'

export default function Feature() {
    return (
        <>





            <div class="font-montserrat mt-80 md-mt-200">
                <div class="container ">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="mb-35">
                                <h6 class="fs-16 fw-600 font-montserrat" style={{textTransform:"uppercase"}}>Here’s Why You Should Choose Taskmo</h6>
                                <h2 class="font-montserrat fw-600 fs-50">Why Choose Us?</h2>
                            </div>

                            <div id="accordion" class="accordion-style-two pr-5">
                                <div class="card">
                                    <div class="card-header arrow-open" id="headingOne">
                                        <h5 class="mb-0">
                                            <button class="fw-600 font-montserrat btn btn-link">
                                                Cost- Efficient
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body">
                                            <p style={{fontSize:"18px"}}>GIt only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                            <button class="fw-600 font-montserrat btn btn-link">
                                                Optimize Efficiency
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body">
                                            <p style={{fontSize:"18px"}}>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable page design to reflect your brand lorem dummy.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <h5 class="mb-0">
                                            <button class="fw-600 font-montserrat btn btn-link">
                                                Increased Flexibility
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body">
                                            <p style={{fontSize:"18px"}}>It only takes 5 minutes. Set-up is smooth &amp; simple, with fully customisable page design to reflect your brand lorem dummy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-8 m-auto" >
                            <div class="illustration-holder d-flex justify-content-end md-mt-50">
                                <img src="assets/img/why choose us copy.jpg" alt="Image" class="animate-float-bob-y" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
