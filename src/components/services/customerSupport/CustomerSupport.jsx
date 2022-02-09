import React from 'react'
import { useEffect, useState } from 'react';
import validation from '../validation';

const init = {
    subscription_name: '',
    subscription_email: '',
    subscription_phone: '',
    subscription_campany_name: '',
    subscription_message: ''
};

const validateEmail = (email) =>
    String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
export default function CustomerSupport() {
    const [state, setState] = useState(init);
    const [store, setStore] = useState([]);
    const [errors, setErrors] = useState({});
    // const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    // console.log(errors.length);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleClick = (e) => {
        e.preventDefault()
        setErrors(validation(state));
        if (
            state.subscription_name !== '' &&
            state.subscription_email !== '' &&
            validateEmail(state.subscription_email) &&
            state.subscription_phone !== '' &&
            state.subscription_phone.length === 10 &&
            state.subscription_campany_name !== '' &&
            state.subscription_message !== '' &&
            state.subscription_message.length >= 15
        ) {
            const payload = {
                subscription_name: state.subscription_name,
                subscription_email: state.subscription_email,
                subscription_phone: state.subscription_phone,
                subscription_campany_name: state.subscription_campany_name,
                subscription_message: state.subscription_message,
                subscription_type: 'merchand'
            };

            fetch(`https://ddsio.com/contact_api/create/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then((res) => {
                res.json();
            });

            // setTodo([...Todo, payload]);
            // enqueueSnackbar('Form Successfully Submited', {
            //     variant: 'success',
            //     action: (key) => (
            //         <MIconButton size="small" onClick={() => closeSnackbar(key)}>
            //             <Icon icon={closeFill} />
            //         </MIconButton>
            //     )
            // });

            setStore([...store, payload]);
            console.log("store", store);

            setState(init);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div style={{ marginTop: "140px" }}>
            {/* <!--====== Feature Section Start ======--> */}
            <section class="feature-section section-gap-bottom">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-lg-6 col-md-10">
                            <div class="feature-img text-lg-left text-center content-mb-md-50">
                                <img src="assets/img/illustrations/customerservice_image.svg" alt="Image" />
                            </div>
                        </div>
                        <div class="font-montserrat col-lg-6 col-md-8 wow fadeInUp">
                            <div class="consultation-form-area pl-xl-3 content-mt-md-50">
                                <div class="consultation-form">
                                    <h3 class="title font-montserrat fw-600">Customer Support</h3>
                                    <p class="subtitle">Share your details and requirements</p>
                                    <form action="#">
                                        <div class="font-montserrat input-field">
                                            <input class="font-montserrat" type="text" placeholder="Full Name" name="subscription_name" value={state.subscription_name} onChange={handleChange} />
                                            <p style={{ color: 'red' }}>{errors.subscription_name}</p>
                                        </div>
                                        <div class="input-field">
                                            <input class="font-montserrat" type="email" placeholder="Email Address" name="subscription_email" value={state.subscription_email} onChange={handleChange} />
                                            {errors.subscription_email && <p style={{ color: 'red' }}>{errors.subscription_email}</p>}
                                        </div>
                                        <div class="input-field">
                                            <input class="font-montserrat" type="text" placeholder="Phone Number" name="subscription_phone" value={state.subscription_phone} onChange={handleChange} />
                                            {errors.subscription_phone && <p style={{ color: 'red' }}>{errors.subscription_phone}</p>}
                                        </div>
                                        <div class="input-field">
                                            <input class="font-montserrat" type="text" placeholder="Company Name" name="subscription_campany_name" value={state.subscription_campany_name} onChange={handleChange} />
                                            {errors.subscription_campany_name && <p style={{ color: 'red' }}>{errors.subscription_campany_name}</p>}
                                        </div>

                                        <div class="input-field">
                                            <textarea class="font-montserrat textarea" placeholder="Tell us what are you business requirements" name="subscription_message" value={state.subscription_message} onChange={handleChange}>
                                            </textarea>
                                            {errors.subscription_message && <p style={{ color: 'red' }}>{errors.subscription_message}</p>}
                                        </div>

                                        <div class="input-field">
                                            <button style={{ fontWeight: "600" }} onClick={handleClick} type="submit" class=" template-btn">Submit <i class="flaticon-right-arrow"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== Feature Section End ======--> */}







            <div class="fancy-feature-sixteen mt-50 md-mt-100" id="feature">
                <div class="container">
                    <div class="block-style-eighteen">
                        <div class="row align-items-center">
                            <div class="col-lg-5" data-aos="fade-up" data-aos-duration="1200">
                                <div class="font-montserrat text-wrapper">
                                    <h3 class="fs-50 fw-600 font-montserrat">Customer Support</h3>
                                    <p style={{ fontSize: "15px" }}>
                                        If you are a payment service provider or a payment aggregator, merchant onboarding plays a key role in contributing to your revenue. With the rise of global small businesses, there has been an increase in the number of micro-merchants. At Taskmo, we help payment facilitators by quickly onboarding merchants to their respective payment platforms. We at Taskmo, have a group of trained executives who will ensure that the customer onboarding process is done in a smooth and efficient manner. Our team of experts will understand your requirements for the merchant onboarding process and help in onboarding merchants five times faster bringing to you the desired results.
                                    </p>

                                </div>
                            </div>
                            <div class="col-lg-7" data-aos="fade-up" data-aos-duration="1200">
                                <div class="d-flex align-items-center justify-content-center">

                                    <img src="assets/img/illustrations/customerservice_img1.svg" alt="Image" class="animate-float-bob-y" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div class="faq-classic pt-140 md-pt-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="title-style-one">
                                <h6 class="font-montserrat">Frequently Asked Questions</h6>
                                <h2 class="fs-50 fw-600 font-montserrat">Have any thought? Look here.</h2>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div id="accordion" class="md-mt-60">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link font-montserrat">
                                                How the affiliate programe works?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" class="collapse">
                                        <div class="card-body font-montserrat">
                                            <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link font-montserrat">
                                                How delete my account?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse">
                                        <div class="card-body font-montserrat">
                                            <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header" id="headingFour">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link font-montserrat">
                                                Ho to invite people with refferel link?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseFour" class="collapse">
                                        <div class="card-body  font-montserrat">
                                            <p>mea case duis tollit et. Etiam nusquam set minium eu sea, ei tale paulo elab. Noluisse mnesarch Et is vero incorrupte eos deserunt quaeren.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

