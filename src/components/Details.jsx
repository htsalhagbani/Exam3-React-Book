import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import { FaHeart } from "react-icons/fa";
import { LuBookOpenCheck } from "react-icons/lu";




function Details() {
    let {rank} =useParams();
    const [details,setdetails]=useState('');
    const[alertshow,setalertshow]=useState('');
    console.log(rank);

    const getdetailsbook=()=>{
        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=2MotIRyG5OZLAoMVgOFzYBUWExoh3PqQ')
   .then((response)=>{
    console.log(response.data.results.books);
    let {results}=response.data;
    let details=results.books.find((item)=>item.rank === parseInt(rank));
    setdetails(details);
   })
    }
    useEffect(()=>{
getdetailsbook();
    },[rank])

    const addfav=()=>{
      const favourite=JSON.parse(localStorage.getItem('favourite'))||[];
      if(!favourite.some(item=>item.rank === details.rank)){
        favourite.push(details);
        localStorage.setItem('favourite',JSON.stringify(favourite));
        setalertshow('Book is Added in favourite section');
      }else{
        setalertshow('this book is alerdy added in faviourate section');
      }
    };
    const addread=()=>{
        const readBook=JSON.parse(localStorage.getItem('readBook'))||[];
        if(!readBook.some(item=>item.rank === details.rank)){
            readBook.push(details);
          localStorage.setItem('readBook',JSON.stringify(readBook));
          setalertshow('Book is Added in Read section');
        }else{
          setalertshow('this book is alerdy added in Read section');
        }
    };
    
  return (
   <>
   <div className=' w-full h-screen  max-md:h-full max-md:flex max-md:justify-center max-md:items-center max-md:flex-col  '>
    <Navbar/>
    {alertshow !== '' && (
<div className="max-w-xl mx-auto my-2 mt-3  ">
  <div className="rounded bg-[#d1e9d1] border-t-4  rounded-b text-blue-900 px-4 py-3 shadow-md my-2" role="alert">
    <div className="flex">
      <svg className="h-6 w-6 text-blue-900 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>
      <div>
        <p className="font-bold">{alertshow}</p>
      </div>
    </div>
  </div>
</div>)}
    <section className=" w-full flex justify-center items-center    p-4 md:p-20 antialiased ">
    <article
        className=" flex bg-slate-100 flex-wrap md:flex-nowrap shadow-lg max-sm:w-full md:max-w-3xl  group cursor-pointer transform duration-500 hover:-translate-y-1">
        <img className="w-full max-h-[400px]  md:w-52" src={details.book_image} alt=""/>
        <div className=" w-full">
            <div className="p-5 pb-10 w-full">
                <h1 className="text-2xl font-bold text-[#946c5b] mt-4">
                    {details.title}
                </h1>
                <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                  <span className='text-[#946c5b] font-bold'>Author: </span> {details.author}
                </p>
                <p className="text-xl  text-blue-600 mt-2   leading-relaxed">
                  <span className='text-[#946c5b] font-bold'>Buy Link: </span> <a style={{target:"_blank"}} href={details.amazon_product_url} className='text-md max-sm:text-sm cursor-pointer'> {details.amazon_product_url}</a>
                </p>
            </div>
            <div className=" p-5 w-full">
                <div className="flex flex-col  items-start gap-3 ">
                    {/* <button onClick={addfav} class="mt-3 w-fit sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-none font-bold text-white md:text-lg rounded-lg shadow-md"> */}
                    <FaHeart onClick={addfav} className='text-[#946c5b]  hover:text-[red] w-6 h-6'/>            
                    {/* </button> */}
                    {/* <button onClick={addread} class="mt-3 w-fit sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-[#946c5b] hover:bg-[lightgray] hover:text-black font-bold text-white md:text-lg rounded-lg shadow-md"> */}
                    <LuBookOpenCheck  onClick={addread}  className='text-[#946c5b] w-6 h-6 hover:text-[black]'/>
            
                    {/* </button> */}
                </div>
               
            </div>
        </div>
    </article>
</section>

<Footer/>
   </div>
   </>
  )
}

export default Details