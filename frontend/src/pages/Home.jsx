import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Features from '../components/Features'
import Header from '../components/Header'
import List from '../components/List'

const Home = ({type}) => {
  const[list,setList]=useState([]);
  const[genre,setGenre]=useState()
  useEffect(()=>{
      const getRandom=async()=>{
          try {
              const result=await axios.get(`http://localhost:5000/api/list${type ?"?type="+type:""}${genre?"&genre="+genre:""}`,{
                  headers:{
                      authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2YzYTUzMDlhZWMwMjZmOGJlYzM4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTQ3ODk2NSwiZXhwIjoxNjY5OTEwOTY1fQ.g5xHRFsyVpwEpFAafFReNEnedj05gslBWgT-SC_o4gQ"
                  }
              })
              console.log(result)
              setList(result.data)
          } catch (error) {
              console.log(error)
          }
      }
      getRandom()
  },[type,genre])
  return (
    <>
    <Header/>
    <Features type={type}/>
    <List/>
    </>
  )
}

export default Home