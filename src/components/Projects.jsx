import React from 'react'

const Projects = ({projectList}) => {
  return (
    <div className='flex flex-col justify-center items-center p-5' id='projects'>
      <h1 className='text-4xl font-bold text-blue-500 mb-15'>Projects</h1>
      <ul className='flex flex-wrap justify-center'>{projectList.map(item=>(
      <li key={item.id} className='w-[300px] m-3 p-3 bg-gray-800 rounded-lg hover:scale-105 transition-all duration-300'>
        <div>
          <img src={item.imageUrl} alt={item.title} className='w-[300px] h-[200px] object-fit rounded-lg' />
          <h2 className='text-lg font-bold'>{item.projectTitle}</h2>
          <p className='text-sm text-gray-500'>{item.description}</p>
          <a href={item.projectUrl} target='__blank' className='text-blue-500'>Project live</a>
        </div>
      </li>
    ))}

    </ul>
    </div>
  )
}

export default Projects