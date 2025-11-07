import React from 'react'

const Skills = () => {
  return (
    <div className="text-center flex flex-col items-center min-h-screen justify-center">
        <h2 className='text-4xl font-bold text-blue-500 p-3'>My <span>Skills</span></h2>
        <div className="flex flex-wrap items-center justify-center p-5 gap-5 text-center">
            <div className="flex flex-col rounded-xl m-3 text-center w-[300px] gap-3 hover:scale-105 transition-all duration-300 bg-gray-800 h-80">
                <h3 className='text-xl text-white font-bold pt-6 mb-10 underline'>Frontend</h3>
                <div className="flex flex-wrap gap-2 text-white p-4">
                  <span className='border p-2 rounded'>React JS</span>
                    <span className="border p-2 rounded">HTML</span>
                    <span className="border p-2 rounded">CSS</span>
                    <span className="border p-2 rounded">JavaScript</span>
                    <span className="border p-2 rounded">Bootstrap</span>
                    <span className="border p-2 rounded">Redux</span>
                </div>
            </div>
            <div className="flex flex-col rounded-xl m-3 w-[300px] text-center gap-3 hover:scale-105 transition-all duration-300 bg-gray-800 h-80">
                <h3 className='text-xl font-bold text-white pt-6 mb-10 underline'>Backend & Database</h3>
                <div className="flex flex-wrap gap-2 text-white p-4"><span className='border p-2 rounded'>Node JS</span>
                    <span className='border p-2 rounded'>Express JS</span>
                    <span className='border p-2 rounded'>Python</span>
                    <span className='border p-2 rounded'>MySQL</span>
                    <span className='border p-2 rounded'>MongoDB</span>
                    <span className='border p-2 rounded'>Postgresql</span>
                </div>
                
            </div>
            <div className="flex flex-col rounded-xl m-3 w-[300px] text-center gap-3 hover:scale-105 transition-all duration-300 bg-gray-800 h-80">
                <h3 className='text-xl text-white font-bold pt-6 mb-10 underline'>Frame Works & Tools</h3>
                <div className="flex flex-wrap gap-2 text-white p-4"><span className='border p-2 rounded'>Git</span>
                    <span className='border p-2 rounded'>GitHub</span>
                    <span className='border p-2 rounded'>VS Code</span>
                    <span className='border p-2 rounded'>Postman</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills