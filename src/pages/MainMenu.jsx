import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'



export default function MainMenu() {
  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown= () => {
    setDropDown(prev => !prev);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('#social-media-dropdown')) {
        setDropDown(false);
      }
    };
    if (dropDown) {
      document.addEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropDown]);

  return (
    <>
    <div className='font-roboto'>
      <header className='flex justify-between items-center px-4 py-2 m-5'>
        <h1>Mythwa Photobooth</h1>
          <nav className='space-x-7'>
            <a>Home</a>
            <a>About</a>
            <div id='social-media-dropdown' className='relative inline-block'>
              <button id='social-media' onClick={handleDropDown}>Social Media</button>
              {dropDown && (
                <div className='absolute left-0 top-full mt-2 bg-white shadow-lg border rounded w-48 z-10'>
                  <ul className='flex flex-col text-left p-2 '>
                    <li><a href='https://www.instagram.com/hilmimthwaa__/?next=%2F'>hilmimthwaa__</a></li>
                    <li><a>hilmimithwa@gmail.com</a></li>
                    <li><a>HilmiMithwa</a></li>
                  </ul>
                </div>
              )}
            </div>
            <a>Your Recent Photos</a>

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
