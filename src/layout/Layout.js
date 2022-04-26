import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Aos from "aos";
import "aos/dist/aos.css";

export const Layout = ({children}) => {

  return (
    <Container 
    data-aos='zoom-out-up'
    data-aos-change
    data-aos-duration="20000"
    >
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
