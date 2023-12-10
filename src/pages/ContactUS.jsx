import React, { useState } from 'react'
import "./contact.css"
const ContactUS = () => {
    const [user, setuser] = useState({
        name: ''
        , email: '',
        message: ""
    });
    const onchange = (e) => {
        console.log(e.target.name)
        let name = e.target.name;
        let value = e.target.value
        setuser({
            ...user,
            [name]: value
        })
    }
    const submit = (e) => {
        e.preventDefault()
    }

    return (
        <>
        <div class="container contact-us-section rounded-md p-3">
            <div class="row h-100">
                <div class="col-md-3 section-title">
                    <h2>Contct Us <span>Stay Connected</span></h2>
                </div>
                <div class="col-md-9">
                    <form accept="javascript:void(0)" method="POST" action="javascript:void(0)" class="contact-us-form" onSubmit={submit}>
                        <div class="form-group">
                            <label htmlFor="inputName">Name : *</label>
                            <input onChange={onchange} placeholder="Enter Name" type="text" required id="inputName" name="name" value={user.name} />
                        </div>
                        <div class="form-group">
                            <label htmlFor="inputEmailAddress">Email Address : *</label>
                            <input onChange={onchange} placeholder="Email address" type="text" required id="inputEmailAddress" name="email" value={user.email} />
                        </div>
                        <div class="form-group">
                            <label htmlFor="inputComment">Message :</label>
                            <textarea onChange={onchange} placeholder="Message" required id="inputComment" rows="2" name="message" value={user.message}></textarea>
                        </div>
                        <div class="form-group clearfix">
                            <button data-id="#accessories-holder" class="red-select-btn model-selector btn-send-message"><span>Submit</span></button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
        <div className="container flex justify-center  ">
        <iframe className='w-full rounded-md' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58407.40974818281!2d86.39304993621025!3d23.802125662814202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6a30804ccfc6d%3A0xfa151e1b85f764e7!2sDhanbad%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1701769987750!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </>
    )
}

export default ContactUS
