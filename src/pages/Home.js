import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Header from '../components/header/Header';
import Main from '../components/main/Main'
import Nav from '../components/nav/Nav';
import About from '../components/about/About';
import Experience from '../components/experience/Experience';
import Portfolio from '../components/portfolio/Portfolio';
import Services from '../components/services/Services';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import BackToTopButton from "../components/goToTopButton/BackToTopButton";
import { DeviceContainer } from '../components/components-device/DeviceContainer';
import {Box, Typography} from '@mui/material';



export const Home = ({inputdata, setInputdata}) => {
  const [loading, setLoading] = useState(true);
  const [btnState, setBtnState] = useState();
  const [openDevcesState, setOpenDevcesState] = useState(false);
  const [backToTop, setBackToTop] = useState(false);

  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid")
    } else {
      navigate("*")
    }
  }

  useEffect(() => {
    userValid();
  }, [])


  const btnHandling = (state)=>{
    setBtnState(state);
}

const openKey = ()=>{
  setTimeout(() => {
  setOpenDevcesState(true);
  }, 1000);
  }

const cloesKey =()=>{
  setTimeout(() => {
  setOpenDevcesState(false);
  }, 1000);
 } 
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 80) {
        setOpenDevcesState(false);
        }
        if(window.scrollY > 100) {
        setBackToTop(true)
        }
        else {
        setBackToTop(false)
        }
    })
    }, []);

  return (
     <Box className='container'>
      {loading ? (
        <Box className="loader-container">
        <center>
      	   <Typography variant="span" class="loader"></Typography>
        </center>
        </Box>
      ) 
      : 
      (
      <Box>
        <Header inputdata={inputdata} setInputdata={setInputdata} />
        <Main btnState={btnState} btnHandling={btnHandling} openKey={openKey} />
        <DeviceContainer cloesKey={cloesKey}  openDevcesState={openDevcesState}/>
        <Nav/>
        <About/>
        <Experience/>
        <Services/>
        <Portfolio />
        <Contact />
        <Footer/>
        <BackToTopButton backToTop={backToTop} />
      </Box>
      )
    }
    </Box>
  )
}

