import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from 'react-icons/bi';
function CarouselComponent() {
  return (
    <div className='my-8 bg-[#F5F4F8] w-[745px] h-[296px] rounded-xl '>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={true}
        showIndicators={true}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className='absolute left-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-white z-10 flex items-center justify-center cursor-pointer hover:opacity-70'
          >
            <BiArrowBack className='text-sm md:text-lg' />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className='absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-white z-10 flex items-center justify-center cursor-pointer hover:opacity-70'
          >
            <BiArrowBack className=' rotate-180 text-sm md:text-lg' />
          </div>
        )}
      >
        <div className=' flex  h-[296px]  '>
          <div className='w-[245px]'>
            <img
              src='https://images.unsplash.com/photo-1713145872395-2dbbff0f8d37?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D'
              className='aspect-[16/10] md:aspect-auto object-cover  rounded-xl  '
            />
          </div>
          asdasdasdasd
        </div>
        <div className='  flex  h-[296px]'>
          <div className='  w-[245px]'>
            <img
              src='https://plus.unsplash.com/premium_photo-1705091982008-b40865cb9c26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D'
              className='aspect-[16/10] md:aspect-auto object-cover  rounded-xl'
            />
          </div>
          asdsad
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
