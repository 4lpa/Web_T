import React from 'react'
import{
    FaFacebook,
    FaInstagram,
    FaTwitterSquare,
    FaWhatsappSquare,

} from 'react-icons/fa'



const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='max-w-[1240px] mx-auto py-0 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text text-3xl font-bold text-[#EFFFFA]'> Paca<span className='text-[#0093AF]'>Web</span>
                </h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel consequuntur quaerat dicta dolorum velit non eos, saepe repudiandae beatae!</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebook size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaWhatsappSquare size={30}/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solution</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insight</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>

                    </ul>
                </div>
            </div>
        </div>
        <div className='bg bg-[#0093AF] mx-auto py-4 text-white text-center'>
            <p className='capitalize'> &copy; 2023 paca web. </p>
        </div>
    </div>
  )
}

export default Footer