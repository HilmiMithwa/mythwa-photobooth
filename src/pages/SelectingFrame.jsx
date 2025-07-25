import React from 'react';

import BackgroundMainmenu from '../images/BackgroundMainmenu.png'; 
import frame1 from './template/frame1-example.png'
import frame2 from './template/frame2-example.png'

export default function SelectingFrame() {
  return (
    <div className='w-screen h-screen bg-cover bg-center flex items-center justify-center' style={{backgroundImage: `url(${BackgroundMainmenu})` }}>
      <div>

        <div className='bg-neonPink p-10  text-white flex flex-col items-center w-[1211px] h-[640px]' id='frame-container'>
          <h1 className='font-luckiest text-[60px]'>Choose the Frame</h1>

          <div className='flex flex-row items-center'>
            <img src={frame1} alt='Frame 1' className='w-[216px] h-[394px] object-cover m-5 rounded-lg' />
            <h2 className='font-luckiest text-[60px]'>OR</h2>
            <img src={frame2} alt='Frame 2' className='w-[216px] h-[394px] object-cover m-5 rounded-lg' />
          </div>

          <div className='self-start mt-6'>
            <p className='text-sm'>Important Note: This Website is currently under development. Please check back regularly for updates and new features</p>
          </div>
          

        </div>
      </div>

    </div>
  )
}
