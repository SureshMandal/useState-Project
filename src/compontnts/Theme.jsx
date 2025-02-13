import React from 'react'
import { useState } from 'react'


const Theme = () => {
    let [dark,setDark]=useState(true)
    function handleTheme(){
        setDark(!dark)
      } 
  return (
    <div className={`${dark?"bg-dark":"bg-white"}`}>
      <div className='Counter d-flex justify-content-center mb-4'>
      <button className='btn btn-outline-warning' onClick={()=>handleTheme()}>{dark?"dark":"light"}</button>
      </div>

       <div className='Counter d-flex justify-content-center mb-4'>
        <h3>{dark?"🌙":"☀️"}</h3>
        </div>
        </div>
  )
}

export default Theme
