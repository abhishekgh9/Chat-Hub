import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import  toast from 'react-hot-toast'

const Signup = () => {

  const [user,setUser] = useState({
    fullName: '',
    username: '',
    password: '', 
    confirmPassword: '',
    gender: ''
  })

  const navigate = useNavigate();
  const handleCheckbox= (gender) => {
    setUser({ ...user, gender });
  }

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    try {
      const res=await axios.post(`http://localhost:8080/api/v1/user/register`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });

      console.log(res.data);
      if (res.data.success) {
        navigate('/login');
        toast.success(res.data.message);
      }
      
    } catch (error) {
      toast.error(error.response.data.message || 'Signup failed');
      console.log(error);
    }
    setUser({
      fullName: '',
      username: '', 
      password: '',
      confirmPassword: '',
      gender: ''
    })
  }

  return (
    <div className='min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-bold text-center '>Sign up</h1>
        <form  onSubmit={onSubmitHandler} action="">
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className='w-full input input-bordered h-10 bg-white text-black'
              type="text"
              placeholder='Enter your full name'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className='w-full input input-bordered h-10 bg-white text-black'
              type="text"
              placeholder='Enter your username'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className='w-full input input-bordered h-10 bg-white text-black'
              type="password"
              placeholder='Enter your password'
            />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              className='w-full input input-bordered h-10 bg-white text-black'
              type="password"
              placeholder='Confirm your password'
            />
          </div>

          <div className='flex items-center my-4'>
            <div className='flex items-center'>
              <p>Male</p>
              <input 
              type="checkbox" 
              checked={user.gender === 'male'}
              onChange={() => handleCheckbox('male')}
              defaultChecked 
              className="checkbox mx-2" 
              />
            </div>
            <div className='flex items-center'>
              <p>Female</p>
              <input 
              type="checkbox" 
              checked={user.gender === 'female'}
              onChange={() => handleCheckbox('female')}
              defaultChecked 
              className="checkbox mx-2" 
              />
            </div>
          </div>


          <p className='text-center '>Already have an account? <Link to="/login">login</Link></p>



          <div>
            <button type='submit'  className='btn btn-block btn-sm mt-2 border border-slate-400 bg-blue-500'>Sign Up</button>
          </div>


        </form>
      </div>
    </div>
  )
}

export default Signup