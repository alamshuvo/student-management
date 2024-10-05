import React, { useEffect, useRef } from 'react';
import { FcGoogle } from "react-icons/fc";
import UseAuth from '../hooks/UseAuth';
import {useNavigate } from "react-router-dom";
import {gsap} from "gsap"
import UseAxiosPublic from '../hooks/UseAxiosPublic';
import Swal from "sweetalert2";

const Login = () => {
const buttonRef = useRef(null);
const axiosPublic=UseAxiosPublic()

  useEffect(() => {
    gsap.to(buttonRef.current, { rotation: 360, duration: 2,x:'10vw',repeat:Infinity,repeatDelay:4, yoyo:true});
  }, []);

    const {gogleSignIn,loading}=UseAuth()
    const navigate=useNavigate()
    const handleGoogleSubmit=async()=>{
        try {
            const res = await gogleSignIn();
            // console.log(res.user); 
            const user={
              name:res.user?.displayName,
              email:res.user?.email,
              photo:res.user?.photoURL,
            }
            console.log(user);
            axiosPublic.post("/users",user)
            .then(res=>{
              console.log(res.data);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              
            })

            
            navigate("/add")
        } catch (error) {
            console.error(error); 
        }
    }
    
    return (
        <div className='container mx-auto font-lato'>
            <h1 className='font-lato text-center text-4xl font-bold mt-10'>Login </h1>
            <div className='flex md:flex-row flex-col justify-between items-center'>
            <div className='md:w-[50%] w-full'>
            <iframe className='w-full md:h-[70vh] h-[100%]' src="https://lottie.host/embed/99cbca10-5eaa-42f9-b4cd-7899cbee372c/p0dPcfgHXt.json"></iframe>
            </div>

            {/* form section  */}
            <div className='md:w-[50%] w-full'>
              {/* <form action="" >
               
              </form> */}
              {/* google sign in  */}
              <div className='flex justify-center items-center mt-10'>
                <button id='button' ref={buttonRef} onClick={handleGoogleSubmit} className=' bg-red-400 text-white md:px-10 md:py-4 p-4 flex justify-center items-center gap-6 hover:bg-red-900   cursor-pointer rounded-lg'>Google Sign in <FcGoogle className='text-2xl ' />
                </button>
              </div>
            </div>
            </div>
        </div>
    );
};

export default Login;