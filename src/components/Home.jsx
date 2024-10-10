import React from 'react'
import Navbar from './Navbar'
import welcome from '../assets/welcome.jpg'
import Footer from './Footer'

function Home() {
  return (
    <div className='w-full h-screen ]'>
    <Navbar/>
    <div className='w-full h-[50%] '>
    <section className="py-8 z-10 font-serif ">
  <div className="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
    <div className="w-full md:w-1/2 py-8">
    <h1 className="text-[#946c5b] text-4xl leading-none tracking-tighter">To support reading and education by bridging the gap in book accessibility.</h1>
      <h1 className="text-[#946c5b] md:text-4xl lg:text-7xl max-sm:text-4xl font-semibold ">
      <h1 className='text-xl mt-8 font-bold'>Welcome  <br/> <span className="text-[gray]"> {localStorage.getItem('username')}  </span>to Book Library</h1>  
      </h1>
    </div>
    <div className="w-full flex justify-center items-center md:w-1/2 py-8  ">
      <img src={welcome} className="g-image w-1/2 rounded-3xl max-sm:w-full"/>
    </div>
  </div>
</section>
<Footer/>
    </div>
 
    </div>
  )
}

export default Home