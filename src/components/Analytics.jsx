import React from 'react'
import data from '../assets/data.jpg'



const Analytics = () => {
  return (
    <div className='w-full bg-2hite py-16 px-4'>
        <div className='max-w-[1240xpx] mx-auto grid md:grid-cols-2 delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300"'>
            <img className='w-[500px] mx-auto my-4 ' src={data} alt="/" />
            <div className='flex flex-col justify-center'>
        <p className='uppercase font-bold text-[#0091AD]'> data analytics dashboard </p>
            <h1 className='capitalize sm:text-3xl text-2xl font-bold py-2'>manage your data </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam voluptates ipsam fugit nam, recusandae vitae nihil perspiciatis non. Harum ullam maiores illo asperiores doloribus. Voluptates atque repellendus magni mollitia consectetur ducimus voluptatibus nostrum veritatis? Natus fugit nam rerum repellat ratione mollitia commodi unde illum ipsum! Ullam numquam neque eum unde.
            </p>
        </div>
        </div>
    </div>
  )
}

export default Analytics