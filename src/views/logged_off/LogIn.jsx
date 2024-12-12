import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
  const navigate = useNavigate();

  const toSignup = () => {
    navigate('/signup');
  };
  return (
    <>
      <div className='text-center text-white border-white'>
        <h1>LOGIN</h1>
        <button onClick={toSignup} className='border-lime-500'>Sign Up</button>
      </div>
    </>
  )
}
