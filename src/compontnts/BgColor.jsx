import React from 'react'
import { useState } from 'react'

const BgColor = () => {
    let [background,setBackground]=useState("green")

  return (
   
     <div className='Counter d-flex justify-content-center mb-4' style={{background:background,height:"10vh"}}>
     <button className='btn btn-outline-black' onClick={()=>setBackground("gold")}>gold</button>
     <button className='btn btn-outline-black' onClick={()=>setBackground("purple")}>purple</button>
     <button className='btn btn-outline-black' onClick={()=>setBackground("orange")}>orange</button>
     <button className='btn btn-outline-black' onClick={()=>setBackground("pink")}>pink</button>
     <button className='btn btn-outline-black' onClick={()=>setBackground("grey")}>grey</button>
     </div>
  )
}

export default BgColor
