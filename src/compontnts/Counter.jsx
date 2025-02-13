import React from 'react'
import { useState } from 'react'

const Counter = () => {
    let [count,setCount]=useState(0)
    let [dec, setDec] = useState(0)
function handleCount(){
    setCount(count+1)
  }
  function handleDec(){
    setDec(dec-1)
  }
  return (
    <div >
      <h1 className='text-bold text-center'>{count+dec}</h1>
      <div className='d-flex justify-content-center mb-4'>
      <button className='btn btn-outline-success' onClick={()=>handleCount()}>Increment</button>
      <button className='btn btn-outline-success' onClick={()=>handleDec()}>Decrease</button>
      </div>
    </div>
  )
}

export default Counter
