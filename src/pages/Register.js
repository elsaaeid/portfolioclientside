import React from 'react'
import { ToastContainer} from 'react-toastify';
import {TextField, Box} from '@mui/material';
import { NavLink } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Logo from "../assets/logo.png";
import "../styles/Auth.css"

const Register = ({handleChange, handleSubmit, passhow, setPassShow}) => {




  return (
      <Box className="form-content flex justify-center items-center">
        <Box className="form_data flex flex-col justify-center items-center">
          <Box className="profile flex justify-center items-center flex-col">
						<Box className='me flex justify-center items-center'>
							<img className='position-relative' src={Logo} alt="logo" />
						</Box>
						<h1 className='name'>digitalCoding</h1>
					</Box>
          <Box className="form_heading">
            <h1>Sign Up</h1>
            <p style={{textAlign:"center"}}>We are glad that you will be using my tutorials to manage
              your tasks! <br/> We hope that you will get like it.</p>
          </Box>
          <form>
            <Box className="form_input flex justify-center items-center">
              <TextField type="text" name="fname" id="fname" onChange={handleChange} placeholder='Enter Your Name' />
            </Box>
            <Box className="form_input flex justify-center items-center">
              <TextField type="email" name="email" id="email"  onChange={handleChange}  placeholder='Enter Your Email Address' />
            </Box>
            <Box className="form_input flex justify-center items-center">
              <Box className='two'>
              <TextField type={!passhow ? "password" : "text"} name="password" id=""  onChange={handleChange}  placeholder='Enter Your password' />
              <Box className='showpass' onClick={()=>setPassShow(!passhow)} >
              {!passhow ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
              </Box>
              </Box>
            </Box>
            <button className='btn' onClick={handleSubmit}>Sign Up</button>
            <Box className="text-center py-4">
                <span className='flex justify-around items-center text-gray-500'>Already Register? <NavLink className='text-red-500' to="/">Login Now</NavLink></span>
            </Box>
          </form>
        </Box>
        <ToastContainer />
      </Box>
  )
}

export default Register