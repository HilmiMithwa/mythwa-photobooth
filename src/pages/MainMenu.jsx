import React from 'react';
import SNAPZY from '../images/SNAPZY.png';
import randomPerson from '../images/photos.png';
import BackgroundMainmenu from '../images/BackgroundMainmenu.png'

import { useNavigate } from 'react-router-dom';




export default function MainMenu() {
  const navigate = useNavigate()

  return (
    <div className='w-screen h-screen bg-cover bg-center' style={{backgroundImage: `url(${BackgroundMainmenu})` }}>
      <nav className='flex justify-between items-center font-manrope bg-white px-12 py-10'>

        <div className='flex items-center space-x-100'>
          <img src={SNAPZY} alt='logo' className=' object-contain'/>
          <ul className='flex space-x-8 text-[30px]'>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a> My Social Media</a></li>
          </ul>
        </div>

        <div>
          <h1 className='bg-darkenBlue text-white text-lg px-20 py-5 text-[25px] mr-45'>Your Recent Photos</h1>
        </div>

      </nav>

      <div className='bg-neonPink text-white w-[1211px] h-[640px] rounded-3xl px-20 py-20 flex justify-between items-center'>
        <div className='flex flex-col gap-5 w-2/3'>
          <h1 className='font-luckiest text-[60px]'>Welcome to<br/> snapzy!</h1>
          <h2 className='font-loved text-[50px]'>Capture the moment, share the joy!</h2>
          <h3 className='font-manrope text-[25px]'>A simple way to capture a precious moment using <br/> portable booth</h3>
          <button className='font-londrina bg-darkNeonPink rounded-[25px] text-[45px]'>Start!</button>
        </div>

        <div id='img-container' className=''>
          <img src={randomPerson} />
        </div>
        


      </div>
    </div>
  )
}
