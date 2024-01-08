import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white bg-black px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='capitalize md:text-4xl sm:text-3xl text-2xl font-bold py-2'> want tips & tricks to optimize your workflow</h1>
                <p>sign up to our News Letter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='capitalize p-3 flex w-full rounded-md text-black' type="email" placeholder='enter your email' />
                    <button className='uppercase bg-[#0091AD] hover:bg-sky-700 active:bg-sky-900 w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-[#EFFFFA]'>notify us</button>
                </div>
                <div>
                <p className='capitalize text-[#EFFFFA]'>we care about the protection of your data Read our <span className='text-[#0093AF] underline'>privacy policy </span> </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter