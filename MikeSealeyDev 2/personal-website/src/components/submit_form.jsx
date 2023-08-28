import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const SubmitForm = () => {
    const form = useRef()
    const [sent, setSent] = useState(false)
    const [sendError, setSendError] = useState(false)

    const sendSuggestion = (e) => {
        e.preventDefault()

        emailjs.sendForm("service_a933bh6", "template_ghoreol", form.current, "Q8OzWzm0kWGLRlnBU")
            .then((result) => {
                setSent(true)
            }, (error) => {
                setSendError(true)
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
                <input type="submit" value="Send" disabled={sent}/>
            </form>
            {sent ? <p>Thanks for your submission</p> : null}
            {sendError ? <p>Something went wrong...</p> : null}
        </div>
    )
}

export default SubmitForm