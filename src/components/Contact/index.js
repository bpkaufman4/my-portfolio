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
        <section>
            <h1>Reach out</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>
        </section>
    );
}

export default Contact;