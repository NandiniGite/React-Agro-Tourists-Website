import React from 'react';
import Plantation from '../assets/food.jpg'
import HorseRiding from '../assets/HorseRiding.jpg'
import food from '../assets/food.jpg'

 const Hero1 =() =>{

    return(
        
        <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
            <h1 className='justify-center text-center'>Activities</h1>
            <p py-4 >On your way to explore more .....</p>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <img  className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Plantation}/>
                <img  className='w-full h-full object-cover' src={HorseRiding}/>
                <img  className='w-full h-full object-cover' src={food}/>
                <img  className='w-full h-full object-cover' src={food}/>
                <img className='w-full h-full object-cover' src={HorseRiding}/>
                
            </div>
        </div>
       
    )
}

export default Hero1;


