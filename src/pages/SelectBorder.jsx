import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Frame1 from './border/Frame1';
import Frame2 from './border/Frame2';

export default function SelectBorder() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleFrameButton = (e) => {
    navigate(e);
  };

  return (
    <>
    <div>
      <nav>
        <button onClick={handleBack}>Back</button>
      </nav>
      <div id='choosing-frame-container' className='flex flex-col justify-center items-center min-h-screen text-center'>
        <div className='bg-blue-100 px-8 py-4 rounded shadow'>
          <h1>Choose size of the frame!</h1>
          <div id='frame-button-container'className='flex flex-col'>
            <button onClick={() => handleFrameButton('/frame1')}>3x1</button>
            <button onClick={() => handleFrameButton('/frame2')}>4x2</button>
          </div>

        </div> 
      </div>
    </div>

    </>
  )
}
