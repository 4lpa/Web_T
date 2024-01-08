import React from 'react'


const LandingBody = () => {
  return (
      <div className='text-[#EFFFFA] bg-hero bg-center bg-cover bg-blend-overlay bg-black/50 bg-no-repeat w-full h-full '>
          <div className='max-w-[900px] my-0 w-full h-screen mx-auto text-center flex flex-col justify-center '>
              <p className='text-[#00AFD1] font-bold p-2 uppercase' > unlock your potential </p>
              <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 uppercase'>turn interaction into insight</h1>
              <p className='md:text-2xl text-xl font-bold text-[#EFFFFA] capitalize'> monitor your data to increase revenue</p>
              <button className='uppercase bg-[#0091AD] hover:bg-sky-700 active:bg-sky-900 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#EFFFFA]'> get started</button>
          </div>
      </div>
  )
}

export default LandingBody