import './contact.css'

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_j56upqs', 'template_v2pifa5', e.target, 'L6lSsRc-f4EInS-N4')

     e.target.reset()
  };

  return (
    <main>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h1 className='reach-container'>Reach out to me!</h1>
            <label>Name</label>
            <input type="text" name="from_name" placeholder='Jon Doe' />
            <label>Email</label>
            <input type="email" name="form_email" placeholder='jon-doe@email.com' />
            <label>Message</label>
            <textarea name="message" style={{height:'200px'}} />
            <input type="submit" value="Send"className='submit-btn'/>
          </form>
      </div>
    </main>
  );
};
export default Contact;