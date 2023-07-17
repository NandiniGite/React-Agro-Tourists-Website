import { useState } from 'react'
import React from 'react'
import image1 from'../assets/img1.jpg'
import {BsArrowLeftSquareFill,BsArrowRightSquareFill} from 'react-icons/bs';

const slidebar=[
    {
       url:'https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
    ,
    {
        url:'https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FtZSUyMHNpemUlMjBpbWFnZSUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
       
    },
    {
        url:'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        
    },
]

const Carousel = () => {
    const[slide,setSlide]=useState(0);
    const length=slidebar.length;

    const prevSlide=()=>{
     setSlide(slide===length-1?0:slide+1);
    }

    const nextSlide=()=>{
        setSlide(slide===0? length-1:slide-1);
       }
   

  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
        <BsArrowLeftSquareFill  onclick={prevSlide}className='absolute top-[50%] text-3xl text-white cursor-pointer left-8'/>
        <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-white cursor-pointer right-8'/>
        {
            slidebar.map((item,index)=>(
                 <div className={index===slide ?'opacity-100':'opacity-0'}>
                   {index===slide &&(<img  className=' w-full rounded-md border-r'src={item.url} alt='/'/> )}
                 </div>
            ))
        }
        
      
    </div>
  );
};

export default Carousel
