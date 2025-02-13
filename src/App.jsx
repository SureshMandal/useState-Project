import React from 'react'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import Counter from './compontnts/Counter'
import BgColor from './compontnts/BgColor'
import Theme from './compontnts/Theme'
import TextResizer from './compontnts/TextResizer'
import Online from './compontnts/Online'
import BatteryLevel from './compontnts/BatteryLevel'


const App = () => {
  return (
    <div>
      <Counter/>
      <BgColor/>
      <Theme/>
      <TextResizer/>
      <Online/>
      <BatteryLevel/>
    </div>
  )
}

export default App
