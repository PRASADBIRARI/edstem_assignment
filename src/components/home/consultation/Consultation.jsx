import React from 'react'
import { useState } from 'react'
import { useForm } from '../useForm';

const init = {
    fullname: "",
    companyname: "",
    email: "",
    phone: ""
};

export default function Consultation() {
    const [store, setStore] = useState(init);
    const [data, setData] = useState([]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setStore({ ...store, [name]: value });
        
    };


    const validate = (fieldValues = store) => {
        if ('fullname' in fieldValues)
            fieldValues.fullname = fieldValues.fullname ? "" : "This field is required."
        if ('companyname' in fieldValues)
        fieldValues.companyname = fieldValues.companyname ? "" : "This field is required."
        if ('phone' in fieldValues)
        fieldValues.phone = fieldValues.phone.length > 9 ? "" : "Min 10 numbers required."
        if ('email' in fieldValues)
        fieldValues.email = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(fieldValues.email) && fieldValues.email ? "" : "Email is not valid."
    }





    const handleADD = () => {
        // if (validate()) {

            const savePayload = {
                fullname: store.fullname,
                companyname: store.companyname,
                email: store.email,
                phone: store.phone
            };
            setData([...data, savePayload,])
            setStore(init)
            // }
            console.log(data);
    }

    return (
        // <div style={{border:"2px solid red"}} class="leftAlign" id="class111">
            <section id="section5" class="consultation-section section-polygon-bg section-gap bg-color-primary">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-10">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-6 col-md-9">
                                    <div class="consultation-text text-white pr-xl-5">
                                        <div class="section-heading heading-white mb-30">
                                            <h2 class="title">Leverage Your Business With Us!</h2>
                                            <span class="tagline">One Stop Solution For Your Business</span>
                                        </div>
                                        <p>
                                            At Taskmo, we work with businesses and enterprises of all sizes by offering services across multiple industries. We help you scale up your business efficiently through our distributed gig workers across the country                                        </p>
                                        <div class="counter-items row">
                                            <div class="col-lg-6">
                                                <div class="counter-item counter-white mt-40">
                                                    <div class="counter-wrap">
                                                        <span class="counter">950</span>
                                                        s                                          <span class="suffix">+</span>
                                                    </div>
                                                    <h6 class="title">Customer Satisfaction</h6>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="counter-item counter-white mt-40">
                                                    <div class="counter-wrap">
                                                        <span class="counter">12500</span>
                                                        <span class="suffix">+</span>
                                                    </div>
                                                    <h6 class="title">Working Hours</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-8 wow fadeInUp">
                                    <div class="consultation-form-area pl-xl-3 content-mt-md-50">
                                        <div class="consultation-form">
                                            <h3 class="title">Let’s Connect </h3>
                                            <p class="subtitle">Get in Touch With Our Experts Today!</p>
                                            {/* <form action="#"> */}
                                            <div class="input-field">
                                                <input type="text" name="fullname" value={store.fullname} onChange={handleChange} placeholder="Full Name" />
                                            </div>
                                            <div class="input-field">
                                                <input type="text" name="companyname" value={store.companyname} onChange={handleChange} placeholder="Company Name" />
                                            </div>
                                            <div class="input-field">
                                                <input type="email" name="email" value={store.email} onChange={handleChange} placeholder="Email Address" />
                                            </div>
                                            <div class="input-field">
                                                <input type="text" name="phone" value={store.phone} onChange={handleChange} placeholder="Phone Number" />
                                            </div>
                                            {/* <div class="input-field">
                                                    <select>
                                                        <option value="1" disabled selected>Subject</option>
                                                        <option value="2">Subject One</option>
                                                        <option value="3">Subject Two</option>
                                                        <option value="4">Subject Three</option>
                                                    </select>
                                                </div> */}
                                            <div class="input-field">
                                                <button onClick={handleADD} class="template-btn">Submit<i class=""></i></button>
                                            </div>
                                            {/* </form> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        // </div>
    )
}
