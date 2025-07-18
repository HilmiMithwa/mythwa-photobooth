import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import SNAPZY from '../images/SNAPZY.png';
import randomPerson from '../images/photos.png';
import BackgroundMainmenu from '../images/BackgroundMainmenu.png'
import photos2 from '../images/photos2.png'
import photos3 from '../images/photos3.png'


export default function MainMenu() {
  const navigate = useNavigate()
  const images = [randomPerson, photos2, photos3]

  return (
    <div className='w-screen h-screen bg-cover bg-center flex flex-col' style={{backgroundImage: `url(${BackgroundMainmenu})` }}>
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

      <div className='flex flex-1 justify-center items-center'>
        <div className='bg-neonPink text-white w-[1211px] h-[640px] rounded-3xl px-20 py-20 flex justify-between items-center'> 
          <div className='flex flex-col gap-5 w-2/3'>
            <h1 className='font-luckiest text-[60px]'>Welcome to<br/> snapzy!</h1>
            <h2 className='font-loved text-[50px]'>Capture the moment, share the joy!</h2>
            <h3 className='font-manrope text-[25px]'>A simple way to capture a precious moment using <br/> portable booth</h3>
            <button className='font-londrina bg-darkNeonPink rounded-[25px] text-[45px]' onClick={() => navigate('/frame1')}>Start!</button>
          </div>

          <div id='carousel-container' className=''>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                })
              ]}
            >
              <CarouselContent className='w-[345px] h-[467px]'>
                {images.map((img, index) => (
                  <CarouselItem key={index} className='basis-full'>
                    <Card className='custom-dashed-4side border-none'>
                      <CardContent className='flex aspect-square items-center justify-center p-6'>
                        <img src={img} alt={`carousel-${index}`} className='object-cover w-full h-full rounded-xl' />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
