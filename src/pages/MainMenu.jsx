import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'


export default function MainMenu() {
  const navigate = useNavigate()

  return (
    <>
    <div className='font-roboto'>
      <header className='flex justify-between items-center px-4 py-2 m-5'>
        <h1>Mythwa Photobooth</h1>
          <nav className='space-x-7'>
            <a>Home</a>
            <a>About</a>
            <a>Social Media</a>
            <a>Your Recent photo</a>
          </nav>
        </header>
        <main className='flex flex-col items-center justify-center min-h-[60vh] '>
          <div id='welcoming-screen' className='text-center '>
            <h1>Welcome!</h1>
            <p>Capture the Moment, Share the Joy!</p>
            <div id='start-button' className='bg-color'>
              <button onClick={() => navigate('/selectborder')}>Start!</button>
            </div>
          </div>


        </main>
      </div>
      
    </>
  )
}
