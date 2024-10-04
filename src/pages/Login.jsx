import React from 'react';
import { FcGoogle } from "react-icons/fc";
import UseAuth from '../hooks/UseAuth';
import {useNavigate } from "react-router-dom";


const Login = () => {
    const {gogleSignIn,loading}=UseAuth()
    const navigate=useNavigate()
    const handleGoogleSubmit=async()=>{
        // if (loading) {
        //     return
        // }
        try {
            const res = await gogleSignIn(); // Call the sign-in function
            console.log(res.user); // Do your processing with the user data
            navigate("/add")
        } catch (error) {
            console.error(error); // Handle the error
        }
    }
    
    return (
        <div>
            <h1 className='font-lato text-center text-4xl font-bold'>Login </h1>
            <div className='flex md:flex-row flex-col justify-between items-center'>
            <div className='md:w-[50%] w-full'>
            <iframe className='w-full md:h-[70vh] h-full' src="https://lottie.host/embed/99cbca10-5eaa-42f9-b4cd-7899cbee372c/p0dPcfgHXt.json"></iframe>
            </div>

            {/* form section  */}
            <div className='md:w-[50%] w-full'>
              {/* <form action="" >
               
              </form> */}
              {/* google sign in  */}
              <div>
                <button onClick={handleGoogleSubmit} className='bg-red-400 text-white md:px-10 md:py-4 p-4 flex justify-center items-center gap-6 hover:bg-red-900  cursor-pointer rounded-lg'>Google Sign in <FcGoogle className='text-2xl ' />
                </button>
              </div>
            </div>
            </div>
        </div>
    );
};

export default Login;