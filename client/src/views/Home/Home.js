import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TextForm from '../../components/TextForm/TextForm'

function Home() {
  return (
   <>

   <Navbar title="TextUtils" home="Home" aboutText="About"/>
   <div className='container my-3 '>
   <TextForm heading="Enter The Text To Analyze Below"/>
   </div>
   </>
  )
}

export default Home