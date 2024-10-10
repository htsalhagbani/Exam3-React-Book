import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


function Read() {
    
    const navigate=useNavigate();
    const readBook=JSON.parse(localStorage.getItem('readBook'))||[];

  return (
    
    <>
    
    <div className='w-full min-h-screen '>
        <Navbar/>
        <section className="dark:bg-gray-900 flex justify-center items-center">
  <div className="px-2 mb-12  py-8 w-[80%]  max-sm:w-full   ">
  
    <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4 justify-items-center">
        {readBook.length === 0?(
<p className='text-md text-[red] text-md font-bold'>No Book in Read Section !!</p>
        ):(
            readBook.map((item,index)=>(
                <article key={index} className="flex bg-slate-100 max-sm:flex-col border rounded dark:border-gray-700/50 dark:bg-gray-800 max-w-md">
                  <img className=" w-[140px] max-sm:w-full h-[200px] rounded-l" loading="lazy" src={item.book_image} alt="Anselm Kiefer" width="140" height="200"/>
                  <div className="flex flex-col justify-between flex-1 p-2">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold dark:text-white line-clamp-2 text-[#946c5b]">{item.title}</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{item.description}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400"> <span className='text-[#946c5b] text-md font-bold'> Auther: </span>{item.author}</p>
                    </div>
                    <div className="flex items-center justify-end gap-2 dark:text-gray-300 flex-wrap">
                  <button onClick={()=>navigate(`/details/${item.rank}`)} className='bg-[#946c5b] p-2 text-white text-sm font-bold hover:bg-[lightgray] hover:text-black rounded-xl'>Show more</button>
                    </div>
                  </div>
                </article>
          ))
        )}
   

    </div>
  </div>
</section>
    </div>
    <Footer/>
    </>
  )
}

export default Read



