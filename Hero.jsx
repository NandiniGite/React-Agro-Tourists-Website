import React from 'react';
import nandu from '../assets/nandu.mp4';
import { AiOutlineSearch } from 'react-icons/ai';
 const Hero =() =>{

    return(
        
        <div className='w-full h-screen relative'>
            <video className='w-full h-full object-cover' src={nandu} autoPlay muted loop   ></video>

        <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"/> 
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4 '>
            <h1>Discover our Culture</h1>
            <h2 className="py-4">Top AgroTourist Spots</h2>
            <form className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-blck bg-gray-100/90'>
                <div>
                    <input  className="bg-transparent w-[300px] sm-[400px] font-[Poppins] focus:outline-none"type="text" placeholder="Search Destinations"></input>
                </div>
                <div>
                    <button><AiOutlineSearch size={20} className="icon" style={{color: 'white'}}/></button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Hero;
