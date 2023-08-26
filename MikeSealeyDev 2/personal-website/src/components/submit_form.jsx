import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

const SubmitForm = () => {
    const form = useRef()

    const sendSuggestion = (e) => {
        e.preventDefault()

        emailjs.sendForm("service_a933bh6", "template_ghoreol", form.current, "Q8OzWzm0kWGLRlnBU")
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    }



    return (
        <div>
            <form id="suggestion-form" ref={form} onSubmit={sendSuggestion}>
                <label>Name *</label>
                <input type="text" name="user_name" required/>
                <label>Email *</label>
                <input type="email" name="user_email" required/>
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send"/>
            </form>

        </div>
    )
}

export default SubmitForm