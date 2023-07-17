import React from 'react';
import {RiCustomerService2Full,RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from'react-icons/md'

 const Hero2 =() =>{

    return(
        
       <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
         <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
               <h2>Heading </h2>
               <p>A tour that brings you home, Happiness is when you feel the inclusiveness and total relatability. Witness an exquisite amalgamation of Man’s Art and Nature’s Intelligence right here at Junnar

Welcomes you in ‘Sanitarium of India’, Junnar with Parashar Agri and Culture Tourism – a unique combination of agritourism, ecotourism, rural and culture tourism & exploring magnificent Junnar, a perfect getaway destination near Mumbai, Pune, Nashik, and Ahmednagar.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 py-4">
            <div className='flex,flex-col lg:flex-row items-center text-center'>
            <button><RiCustomerService2Fill size={20}/>
            </button>
            <div>
               <h2 className='py-3'>LEADING SERVICES</h2>
               <p className='py-2'>All inclusive company for 20 years in a row</p>
            </div>
            </div>

            <div className='flex,flex-col lg:flex-row items-center text-center'>
            <button><MdOutlineTravelExplore size={20}/>
            </button>
            <div>
               <h2 className='py-3'>LEADING SERVICES</h2>
               <p className='py-2'>All inclusive company for 20 years in a row</p>
            </div>
            </div>
           </div>
         </div>
         <div>
            <div className=' border-2 rounded text-center'>
               <p className='pt-2'>GET AN ADDITITONAL 10%OFF</p>
               <p className='py-4'>12 HOURS LEFT</p>
               <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
            </div>
            <form className='w-full'>
               <div className='flex flex-col my-2'>
                  <label>Destination</label>
                  <select className='border-2 rounded-md p-2'>
                     <option>Select</option>
                     <option>Select</option>
                     <option>Select</option>
                     <option>Select</option>
                     <option>Select</option>
                  </select>
               </div>
               <div className='flex flex-col my-2'>
                  <label>Check-In</label>
                  <input className='border-2 rounded-md p-2' type='date'/>
               </div>
               <div className='flex flex-col my-2'>
                  <label>Check-Out</label>
                  <input className='border-2 rounded-md p-2' type='date'/>
               </div>
               <button className='w-full my-4'>Book Now</button>
            </form>
            
         </div>
       </div>
    )
}

export default Hero2;