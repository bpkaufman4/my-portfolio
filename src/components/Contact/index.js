import React, { useState } from "react";

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;

    var handleChange = function(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    var handleSubmit = function(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section id="contact-form">
            <h2 id="reach">Reach out</h2>
            <form id="contact-form">
                <div>
                    <input placeholder="Name" type="text" name="name" defaultValue={name} onChange={handleChange} required></input>
                </div>
                <div>
                    <input placeholder="Email" type="email" name="email" defaultValue={email} onChange={handleChange} required></input>
                </div>
                <div>
                    <textarea placeholder="Message" name="message" rows="5" defaultValue={message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>
        </section>
    );
}

export default Contact;