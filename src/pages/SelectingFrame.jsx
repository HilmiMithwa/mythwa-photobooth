import React from 'react';

import BackgroundMainmenu from '../images/BackgroundMainmenu.png';
import frame1 from './template/frame1-example.png'
import frame2 from './template/frame2-example.png'

export default function SelectingFrame() {
  return (
    <div className='w-screen h-screen bg-cover bg-center flex flex-col' style={{backgroundImage: `url(${BackgroundMainmenu})` }}>
      <div>

        <div className='flex overflow-x-auto gap-4 bg-neonPink ' id='frame-container'>
          <h1>Choose the Frame</h1>
          <div className=''>
            <img src={frame1} />
          </div>
          <div className=''>
            <img src={frame2} />
          </div>
        </div>
      </div>

    </div>
  )
}
