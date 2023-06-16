import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { sentOtpFunction } from "../services/Apis";
import Spinner from 'react-bootstrap/Spinner';
import {TextField, Box} from '@mui/material';
import Logo from "../assets/logo.png";
import "../styles/Auth.css"

const Login = () => {

    const [email, setEmail] = useState("");
    const [spiner,setSpiner] = useState(false);

    const navigate = useNavigate();



    // sendotp
    const sendOtp = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Enter Your Email !")
        } else if (!email.includes("@")) {
            toast.error("Enter Valid Email !")
        } else {
            setSpiner(true)
            const data = {
                email: email
            }

            const response = await sentOtpFunction(data);

            if (response.status === 200) {
                setSpiner(false)
                navigate("/user/otp",{state:email})
            } else {
                toast.error(response.response.data.error);
            }
        }
    }

    return (
        <>
            <Box className="form-content flex justify-center items-center">
                <Box className="form_data flex flex-col justify-center items-center">
                    <Box className="profile flex justify-center items-center flex-col">
						<Box className='me flex justify-center items-center'>
							<img className='position-relative' src={Logo} alt="logo" />
						</Box>
						<h1 className='name'>digitalCoding</h1>
					</Box>
                    <Box className="form_heading">
                        <h1>Welcome Back</h1>
                        <p>Hi, we are you glad you are back. Please login.</p>
                    </Box>
                    <form>
                        <Box className="form_input flex justify-center items-center">
                            <TextField type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email Address' />
                        </Box>
                        <button className='btn' onClick={sendOtp}>Login
                        {
                            spiner ? <span><Spinner animation="border" /></span>:""
                        }
                        </button>
                        <p className='flex justify-around items-center'>Don't have account <NavLink className='text-red-500' to="/register">Sing up</NavLink> </p>
                    </form>
                </Box>
                <ToastContainer />
            </Box>
        </>
    )
}

export default Login