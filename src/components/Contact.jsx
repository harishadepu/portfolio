import React, { useRef } from 'react'

const Contact = () => {
  const form = useRef()
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_f15qb93', 'template_juq9ymd', form.current, 'Npg_Ev4WsAb01SfUo')
      .then(()=>{
        alert("Message sent successfully!")
        form.current.reset();
      }),
      (error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again later.");
      }
    }
  return (
    <div className="flex flex-col justify-around min-h-screen items-center" id="contact">
        <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center items-center p-5 gap-4 w-full">
                <h2 className='text-4xl font-bold text-blue-500'>Contact <span className='text-blue-500'>Me</span></h2>
                <p>Let's Work Together</p>
                <p>Feel free to reach out to me for any<br/> quetions or opportunities!</p>
                <p><strong>Email:</strong> adepuuharish@gmail.com</p>
                <p><strong>Phone:</strong> 8099913922</p>
                
            </div>
            <div className="flex flex-col justify-center items-center p-5 w-full">
                <form action="#" ref={form} onSubmit={sendEmail} className='flex flex-col gap-3 w-full max-w-md'>
                    <input className='bg-gray-600 p-3 rounded-lg outline-none' type="text" name='user_name' placeholder="Enter Your Name" required/>
                    <input className='bg-gray-600 p-3 rounded-lg outline-none' type="email" name='user_email' placeholder="Enter Your Email" required/>
                    <input className='bg-gray-600 p-3 rounded-lg outline-none' type="text" name='subject' placeholder="Enter Your Subject" required/>
                    <textarea placeholder="Enter Your Message" className='bg-gray-600 p-3 rounded-lg outline-none' name='message' required></textarea>
                    <button type="submit" className="bg-blue-600 p-4 rounded-xl hover:bg-blue-400 cursor-pointer font-bold text-md">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact