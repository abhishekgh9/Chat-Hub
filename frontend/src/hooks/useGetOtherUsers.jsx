import React, { use } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';


const useGetOtherUsers = () => {

  const dispatch= useDispatch();

  useEffect(() => {
    const fetchOtherUsers = async () => {
      try {
        axios.defaults.withCredentials = true; // Ensure cookies are sent with requests
        const res = await axios.get('http://localhost:8080/api/v1/user/');
        // console.log(res);
        //continue from here 4:00:18

        dispatch(setOtherUsers(res.data));

      } catch (error) {
        console.log(error);
      }
    };

    fetchOtherUsers();
  }, [])
}

export default useGetOtherUsers