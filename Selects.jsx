import React from 'react'
import img1 from '../assets/img6 (1).jpg'
import img2 from '../assets/img6 (2).jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

const Selects = () => {
  return (
    <div>
    <h2 className='justify-center text-center my-8 mx-4'>Blogs and News</h2>
    <div className='max-w-[1000px] mx-auto px-4 py-8 grid sm:grid-cols-2 lg-grids-col-3 gap-8'>
        
      <div className='relative hover:bg-violet-600'>
        <img   src={img1 }/>
        <div className='bg-gray-900/30 absolut top-0 left-0 w-full '>
            <p className='left-4 bottom-4 text-xl text-white absolute font-bold'>Organic Vegetables at your doors</p>
        </div>
      </div>

      <div className='relative blog'>
        <img src={img2 }/>
        <div className='bg-gray-900/30 absolut top-0 left-0 w-full '>
            <p className='left-4 bottom-4 text-xl text-white absolute font-bold'>New Revolution in Agriculture</p>
        </div>
      </div>

      <div className='relative'>
        <img src={img3 }/>
        <div className='bg-gray-900/30 absolut top-0 left-0 w-full '>
            <p className='left-4 bottom-4 text-xl text-white absolute font-bold'>Economic boost to farming</p>
        </div>
      </div>

      <div className='relative'>
        <img src={img4 }/>
        <div className='bg-gray-900/30 absolut top-0 left-0 w-full '>
            <p className='left-4 bottom-4 text-xl text-white absolute font-bold'>Getting closer to nature </p>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Selects
