import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


function Book() {
    //2MotIRyG5OZLAoMVgOFzYBUWExoh3PqQ
    
    const [books,setbooks]=useState([]);
    const [search,setsearch]=useState('');
    const navigate=useNavigate();

    const showallbooks=()=>{
        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=9IxTUXAARgvoGOVf8DvC5F6JX4olD3Lj')
        .then((response)=>{
            console.log(response.data.results.books);
            setbooks(response.data.results.books);   
        })
    }

    useEffect(()=>{
showallbooks();
    },[])

    const searchterm =()=>{
        if(search === ''){
            showallbooks();
        }else{
            let result=books.filter((item)=>item.title && item.title.toLowerCase().includes(search.toLocaleLowerCase()));
            if(result){
                setbooks(result)
            }
        }
    }

  return (
    <>
    <div className='w-full min-h-screen '>
        <Navbar/>
        <section className="dark:bg-gray-900 flex justify-center items-center">
  <div className="px-2 mb-12  py-8 w-[80%]  max-sm:w-full   ">
    <header className='w-full  flex flex-col justify-center items-center'>
      <h2 className="mb-4   font-bold dark:text-gray-100 text-2xl text-center text-[#946c5b]">Books You May Like</h2>

<div className="flex relative lg:w-[40vw]  md:w-[60%]  w-[90%] rounded-md px-4 ">
    <input value={search} onChange={(e)=>{setsearch(e.target.value)}} type="text" name="q" id="query" placeholder="Button, Footer, etc"
        className="w-full p-3 rounded-md border-2 border-r-white rounded-r-none border-gray-300 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500dark:text-gray-300 dark:border-none " />
    <button
    onClick={searchterm}
        className="inline-flex items-center gap-2 bg-[#946c5b] text-white text-lg font-semibold py-3 px-6 rounded-r-md">
        <span>search</span>
        <span className="hidden md:block">
            <svg className="text-gray-200 h-5 w-5 p-0 fill-current" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                viewBox="0 0 56.966 56.966" width="512px" height="512px">
                <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
        </span>
    </button>

</div>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-4   justify-items-center">
      {books.map((item,index)=>(
      <article key={index} className="flex bg-slate-100 max-sm:flex-col border rounded dark:border-gray-700/50 dark:bg-gray-800 max-w-md">
        <img className=" w-[140px] max-sm:w-full h-[200px] rounded-l" loading="lazy" src={item.book_image} alt="Anselm Kiefer" width="140" height="200"/>
        <div className="flex flex-col justify-between flex-1 p-2">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold dark:text-white line-clamp-2 text-[#946c5b]">{item.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{item.description}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400"> <span className='text-[#946c5b] text-md font-bold'> Auther: </span>{item.author}</p>
          </div>
          <div className="flex items-center justify-end gap-2 dark:text-gray-300 flex-wrap">
        <button onClick={()=>navigate(`/details/${item.rank}`)} className='bg-[#946c5b] p-2 text-white text-sm font-bold hover:bg-[lightgray] hover:text-black rounded-xl'>Show more</button>
          </div>
        </div>
      </article>
))}

    </div>
  </div>
</section>
    </div>
    <Footer/>
    </>
  )
}

export default Book