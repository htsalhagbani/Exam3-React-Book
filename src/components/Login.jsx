import React, { useState } from 'react'
import logo from '../assets/bookss.jpeg'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import clip2 from '../assets/clip2.jpg'



function Login() {
    const [name,setname]=useState('');
    const[password,setpassword]=useState('');
    const navigate=useNavigate();

    const [msg,setmsg]=useState('');


    const loginuser =()=>{
        setmsg('');
        if(name === ''){
            setmsg(' enter your name!');
        }else if(password === ''){
            setmsg('enter your password !')
        }else if(password.length<6){
            setmsg('password should more than 5 character!')
        }else {
          axios.get('https://6703ef81ab8a8f89273247ca.mockapi.io/user')
          .then((response)=>{
            localStorage.setItem('username',name);
            navigate('/home')
          })
        }

    }

  return (
    <div class="font-[sans-serif] ">
    <div class="min-h-screen flex fle-col items-center justify-center py-6 px-4">
      <div class="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
      <div className="border border-gray-300 bg-slate-100 rounded-lg p-6   max-sm:w-full max-lg:w-full lg:w-[30vw] shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
      
  <div className="mb-8">
    <h3 className="text-3xl font-extrabold text-[#946c5b]">Login</h3>
    <p className='text-[red] text-md mt-4'>{msg}</p>
    {/* <p className="text-gray-500 text-sm mt-4 leading-relaxed">Sign in to your account and explore a world of possibilities. Your journey begins here.</p> */}
  </div>

  <div>
    <label className="text-gray-800 text-sm mb-2 block">User name</label>
    <div className="relative flex items-center">
      <input value={name} onChange={(e)=>setname(e.target.value)} name="username" type="text" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter user name" />
    </div>
  </div>
 
  <div>
    <label className="text-gray-800 text-sm mt-3 mb-2 block">Password</label>
    <div className="relative flex items-center">
      <input value={password} onChange={(e)=>setpassword(e.target.value)} name="password" type="password" required className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600" placeholder="Enter password" />
    </div>
  </div>



  <div className="!mt-8">
    <button onClick={loginuser} type="button" className="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-[#946c5b] hover:bg-[lightgray] hover:text-black focus:outline-none">
     Login
    </button>
  </div>

  <p className="text-sm !mt-8 text-left text-gray-800">If you Dont't have an account <Link to={'/'} className="text-[#946c5b] font-semibold hover:underline ml-1 whitespace-nowrap">SignUp</Link></p>

</div>
        
        <div class="lg:h-[400px] md:h-[300px] max-md:mt-8">
          <img src={clip2} class="w-full h-full max-md:w-4/5 mx-auto block rounded-2xl " alt="Dining Experience" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login