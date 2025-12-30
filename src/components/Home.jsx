import React from 'react';
import profile from '../assets/harish_image.png';
import resume from '../assets/harishresume_new.pdf';

const Home = () => {
  return (
    <section id="home" className="scroll-mt-24 container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex justify-center items-center min-h-screen">
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16">
    
    {/* Text Section */}
    <div className="flex-1 text-center lg:text-left max-w-xl">
      <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
        Hello, it's me <span className="text-blue-500">Harish Adepu</span>
      </h1>
      <h2 className="text-gray-200 mt-2 text-lg sm:text-xl font-semibold">Full-stack Developer</h2>
      <p className="mt-4 text-base md:text-lg text-gray-400">
        I am a full-stack developer with a <span className="text-white font-medium">MERN stack</span> skill set...
      </p>

      <div className="flex flex-wrap gap-4 mt-6 justify-center lg:justify-start">
        <a href={resume} download className="border px-6 py-3 rounded-xl hover:bg-blue-500 hover:text-white transition">
          Download Resume
        </a>
        <a href="/contact">
          <button className="border px-6 py-3 rounded-xl hover:bg-blue-500 hover:text-white transition">
            Contact Me
          </button>
        </a>
      </div>
    </div>

    {/* Image Section */}
    <div className="flex-shrink-0">
      <img
        src={profile}
        alt="Portrait of Harish Adepu, Full-stack Developer"
        loading="lazy"
        className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
</section>
  );
};

export default Home;