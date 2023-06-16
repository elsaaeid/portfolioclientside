import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { userVerify } from "../services/Apis";
import {Box, TextField} from '@mui/material';


const Otp = () => {
  const [otp, setOtp] = useState("");

  const location = useLocation();

  const navigate = useNavigate();

  const LoginUser = async (e) => {
    e.preventDefault();

    if (otp === "") {
      toast.error("Enter Your Otp")
    } else if (!/[^a-zA-Z]/.test(otp)) {
      toast.error("Enter Valid Otp")
    } else if (otp.length < 6) {
      toast.error("Otp Length minimum 6 digit")
    } else {
      const data = {
        otp, email: location.state
      }

      const response = await userVerify(data);
      if (response.status === 200) {
        localStorage.setItem("userdbtoken", response.data.userToken);
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/home")
        }, 5000)
      } else {
        toast.error(response.response.data.error)
      }
    }
  }

  return (
    <Box className="form-content flex justify-center items-center w-full h-full">
    <Box className="form_data p-5 flex flex-col justify-center items-center">
      <Box className="form_heading p-5">
        <h1>Please check your mail and enter Your OTP Here</h1>
      </Box>
      <form>
        <Box className="flex justify-center items-center form_input">
          <TextField type="text" name="otp" id="" onChange={(e) => setOtp(e.target.value)} placeholder='Enter Your OTP' />
        </Box>
        <button className='btn' onClick={LoginUser}>Submit</button>
      </form>
    </Box>
    <ToastContainer />
  </Box>
  )
}

export default Otp