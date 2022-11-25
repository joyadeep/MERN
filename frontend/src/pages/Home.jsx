import React from 'react'
import Features from '../components/Features'
import Header from '../components/Header'

const Home = ({type}) => {
  return (
    <>
    <Header/>
    <Features type={type}/>
    </>
  )
}

export default Home