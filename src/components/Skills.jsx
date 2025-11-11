import React from 'react'

const Skills = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
  <h2 className="text-4xl font-bold text-blue-500 p-3">
    My <span>Skills</span>
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
    {/* Frontend */}
    <div className="flex flex-col rounded-xl text-center w-full sm:w-[300px] gap-3 hover:scale-105 transition-all duration-300 bg-gray-800 h-80">
      <h3 className="text-xl text-white font-bold pt-6 mb-10 underline">Frontend</h3>
      <div className="flex flex-wrap gap-2 text-white p-4 justify-center">
        <span className="border p-2 rounded">React JS</span>
        <span className="border p-2 rounded">HTML</span>
        <span className="border p-2 rounded">CSS</span>
        <span className="border p-2 rounded">JavaScript</span>
        <span className="border p-2 rounded">Bootstrap</span>
        <span className="border p-2 rounded">Redux</span>
      </div>
    </div>

    {/* Backend & Database */}
    <div className="flex flex-col rounded-xl text-center w-full sm:w-[300px] gap-3 hover:scale-105 transition-all duration-300 bg-gray-800 h-80">
      <h3 className="text-xl font-bold text-white pt-6 mb-10 underline">Backend & Database</h3>
      <div className="flex flex-wrap gap-2 text-white p-4 justify-center">
        <span className="border p-2 rounded">Node JS</span>
        <span className="border p-2 rounded">Express JS</span>
        <span className="border p-2 rounded">Python</span>
        <span className="border p-2 rounded">MySQL</span>
        <span className="border p-2 rounded">MongoDB</span>
        <span className="border p-2 rounded">PostgreSQL</span>
      </div>
    </div>

    {/* Frameworks & Tools */}
    <div className="flex flex-col rounded-xl text-center w-full sm:w-[300px] gap-3 hover:scale-105 transition-all duration-300 bg-gray-800 h-80">
      <h3 className="text-xl text-white font-bold pt-6 mb-10 underline">Frameworks & Tools</h3>
      <div className="flex flex-wrap gap-2 text-white p-4 justify-center">
        <span className="border p-2 rounded">Git</span>
        <span className="border p-2 rounded">GitHub</span>
        <span className="border p-2 rounded">VS Code</span>
        <span className="border p-2 rounded">Postman</span>
      </div>
    </div>
  </div>
</div>
  )
}

export default Skills