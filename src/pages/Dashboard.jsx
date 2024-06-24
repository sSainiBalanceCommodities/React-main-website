import React from 'react'
import About from '../components/About/About'
import Vision from '../components/Values/Vision'
import Mission from '../components/Values/Mission'
import Founder from '../components/Founder/Founder'
import SetsApart from '../components/SetsApart/SetsApart'

const Dashboard = () => {
  return (
    <>
        <About />
        <SetsApart />
        <Vision />
        <Mission />
        <Founder />
    </>
  )
}

export default Dashboard
