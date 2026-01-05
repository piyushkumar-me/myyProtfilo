import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // two-way binding handler
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_lq5gags",

            "template_cyxmo7e",
          
            formData,
            "1Ruib2Szao0e7eMIA"
        )
            .then(() => {
                alert("Message sent successfully ✅");

                // reset form
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            })
            .catch((error) => {
                alert("Failed to send message ❌");
                console.error(error);
            });
    };

    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <form className="space-y-4" onSubmit={sendEmail}>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/20 text-white outline-none"
                />

                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/20 text-white outline-none"
                />

                <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 rounded-md bg-black/40 border border-white/20 text-white outline-none resize-none"
                />

                <button
                    type="submit"
                    className="w-full py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition"
                >
                    Send Message
                </button>

            </form>
        </div>
    );
}

export default ContactForm;
