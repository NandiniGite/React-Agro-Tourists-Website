import React from 'react'
import{FaFacebook,FaInstagram,FaTwitter,FaYoutube} from'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-8'>
        <div className='max-w-[1240px] mx-auto flex flex-col'>
            <div className='sm:flex text-center justify-between items-center'>
                <h1>AGЯO.</h1>
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                <FaFacebook className='icon'/>
                    <FaTwitter className='icon'/>
                    <FaYoutube className='icon'/>
                    <FaInstagram className='icon'/>
                </div>
            </div>
            <div className='flex justify-between'>
                <ul>
                    <li>About</li>
                    <li>Sign In </li>
                    <li>Partnerships</li>
                    
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
