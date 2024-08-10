import { useState } from "react"
import "./toggle.css"
export const ToggleSwitch= ()=>{
  const[isOn,SetIsOn] = useState(false)
  const handleCLick =()=>{
    SetIsOn(!isOn)
  }
    return(

        <>
        <div className="toggle-switch" style={{backgroundColor:  isOn ? 'green' : 'red'}}
         onClick={handleCLick}  >
            <div className={`switch ${isOn ? 'on' : 'of'}`}>
                <span className="switch-state"> { isOn ? 'on' : 'of'}</span>
            </div>
        </div>
        </>
    )
}