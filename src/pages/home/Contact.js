import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa'

function Contact() {

    return (
        <>
            <div className="contact-title">
                <h1>Contact</h1>
            </div>
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-box">
                        <h1>Send Us A Message</h1>
                        <form action="/send_message.php" className="contact-form">
                            <input type="text" placeholder="Your Email Address" className="contact-email" />
                            <textarea className="contact-textArea" name="message" placeholder="How Can We Help?" />
                            <input type="submit" value='SUBMIT' className="contact-submit" />
                        </form>
                    </div>
                    <div className="contact-box">
                        <div className="contact-row">
                            <div className="row-title">
                                <FaMapMarkerAlt />
                                <h2>Address</h2>
                            </div>
                            <div className="row-explain">
                                <p>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                            </div>
                        </div>
                        <div className="contact-row">
                            <div className="row-title">
                                <FaPhoneAlt />
                                <h2>Lets Talk</h2>
                            </div>
                            <div className="row-explain">
                                <p>+1 800 1236879</p>
                            </div>
                        </div>
                        <div className="contact-row">
                            <div className="row-title">
                                <FaRegEnvelope />
                                <h2>Sale Support</h2>
                            </div>
                            <div className="row-explain">
                                <p>contact@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
export default Contact;