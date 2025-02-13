import React from 'react'
import { useState } from 'react'

const Online = () => {
  let [offline,setOffline]=useState(true)
      
        function handleOffline(){
          setOffline(!offline)
        }
  return (
    <div className='Counter d-flex justify-content-center mb-4'>
            <button className='btn btn-outline-warning' onClick={()=>handleOffline()}>{offline?"Offline":"Online"}</button>

        <h3>{offline?"Online":"Offline"}</h3>
        </div>
  )
}

export default Online
