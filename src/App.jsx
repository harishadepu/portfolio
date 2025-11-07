import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

const App = () => {
  const projectList = [
    {
    id: '1',
    projectTitle: 'quickgpt',
    description:
      'users to ask intelligent questions and generate stunning, high-quality images from natural language prompts. Whether youre exploring ideas, seeking answers, or visualizing concepts, this app blends conversational AI with visual creativity to deliver an immersive experience.',
    imageUrl: 'https://i.ibb.co/hFSDr7FY/Screenshot-2025-10-13-191613.png',
    projectUrl: 'https://ai-project-beta-indol.vercel.app/',
  },
 
  {
    id: '2',
    title: 'chat-app',
    projectTitle: 'chat-app',
    description:
      'this application used to communication with friends and family.',
    imageUrl: 'https://i.ibb.co/JRm22Rrw/Screenshot-2025-07-16-160207.png',
    projectUrl: 'https://chat-app-2-a0dt.onrender.com',
  },{
    id: '3',
    categoryId: 'PROJECT',
    projectTitle: 'e-commerce',
    description:
      'this is used to buy products online and sell products online.',
    imageUrl: 'https://i.ibb.co/JRm22Rrw/Screenshot-2025-07-16-160207.png',
    projectUrl: 'https://chat-app-2-a0dt.onrender.com',
  },
  {
    id: '4',
    categoryId: 'PROJECT',
    projectTitle: 'Portfolio',
    description:
      'this is tell us about me.',
    imageUrl: 'https://i.ibb.co/hFSDr7FY/Screenshot-2025-10-13-191613.png',
    projectUrl: 'https://portfolio-front-3zn0.onrender.com',
  },{
    id: '5',
    projectTitle: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    projectUrl: 'https://tourismapp.ccbp.tech/',
  },
  {
    id: '11',
    projectTitle: 'Food Recipe search Application',
    description: 'This application helps users to search various food recipes based on ingredients provided by the user.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',

    projectUrl: 'https://food-recipe-0df0.onrender.com',
  },
  
  {
    id: '6',
    projectTitle: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',

    projectUrl: 'https://fm.ccbp.tech/',
  },
  
  {
    id: '7',
    projectTitle: 'Todos Application',
    description:
      'This app helps users to track the day to day tasks. Users can create, edit, track the status of each todo item and able to persist them over page reloads.',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png',

    projectUrl: 'https://todossapp.ccbp.tech/',
  },
  {
    id: '8',
    projectTitle: 'Wikipedia Search Application',
    description:
      'Using this Wikipedia Search Application users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png',

    projectUrl: 'https://wikiseaarch.ccbp.tech/',
  },
  
  {
    id: '9',
    projectTitle: 'Move Messenger',
    description:
      'The landing page of Move Messenger gives you a brief intro of Move Messenger. The landing page is responsive enabling to view it across various devices.',
    imageUrl:
      'https://assets.ccbp.in/frontend/intermediate-rwd/move-messenger-img.png',
          projectUrl: 'https://movemessengers.ccbp.tech/',
  },
  
  {
    id: '10',
    projectTitle: 'Nxt Trendz',
    description:
      'Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png',

    projectUrl: 'https://nxtz.ccbp.tech/',
  },
]
  return (
    <div className='bg-gray-700 min-h-screen'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects projectList={projectList}/>}/>
        <Route path='/contact' element={<Contact/>}/>
      
      
      </Routes>
    </div>
    
  )
}

export default App