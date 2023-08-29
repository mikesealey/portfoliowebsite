import emailjs from "@emailjs/browser"
import { useRef, useState } from "react"

const ContactForm = () => {
    const form = useRef()
    const [sent, setSent] = useState(false)
    const [sendError, setSendError] = useState(false)

    const submitContactForm = (e) => {
        e.preventDefault()

        emailjs.sendForm("service_a933bh6", "template_lbrbqlf", form.current, "Q8OzWzm0kWGLRlnBU")
        .then((result) => {
            setSent(true)
        }, (error) => {
            setSendError(true)
        })
    } 

    return (
        <div className="submission-form">
            <form ref={form} onSubmit={submitContactForm}>
                <label>Name *</label>
                <input type="text" name="user_name" required/>
                <label>Email *</label>
                <input type="email" name="user_email" required/>
                <label>Enquiry *</label>
                <textarea name="message" required/>
                <input type="submit" value="Send"/>
            </form>
            {sent ? <p>Thanks for your submission</p> : null}
            {sendError ? <p>Something went wrong...</p> : null}
        </div>
    )
}

export default ContactForm