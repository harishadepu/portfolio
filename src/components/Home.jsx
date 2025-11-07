import React from 'react'
import profile from '../assets/harish_image.png'
import resume from '../assets/harishresume_new.pdf'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="p-6 sm:p-8 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between text-white sm:mt-18">
      <div className="mt-10 lg:mt-0 max-w-2xl text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
          Hello, it's me <span className="text-blue-500">Harish Adepu</span>
        </h1>
        <h2 className="mt-2 text-lg sm:text-xl font-semibold">Full-stack Developer</h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-400">
          I am a full-stack developer with a <span className="text-white font-medium">MERN stack</span> skill set. Proficient in Python,
          SQLite, MySQL, HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.I have developed web applications,
          troubleshooted coding issues, and managed databases. I am recognized for my strong problem-solving mindset, persistence, and dedication to continuous learning.
          I am eager to contribute my skills and enthusiasm to a dynamic team and make a meaningful impact.
        </p>

        <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
          <a
            href={resume}
            download
            className="text-base sm:text-lg border px-6 py-3 rounded-xl transition hover:scale-105 hover:underline"
          >
            Download Resume
          </a>
          <Link to="/contact">
            <button className="text-base sm:text-lg border px-6 py-3 rounded-xl transition hover:scale-105 hover:underline">
              Contact Me
            </button>
          </Link>
        </div>
      </div>

      <div className="mb-8 lg:mb-0">
        <img
          src={profile}
          alt="Portrait of Harish Adepu"
          className="h-64 w-64 sm:h-72 sm:w-72 lg:h-[300px] lg:w-[300px] object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  )
}

export default Home