import React from "react";


const CustomRadio = (props) => {


   return (
       <div onClick={() => props.onHandle(props.value)} className={"radio"}>
          <span className={"radio-items"}>
                 <svg height="25" width="25">
                    <circle cx="12" cy="12" r="11" stroke="gray"
                            strokeWidth="1"
                            fill={props.onChecked ? "red" : "white"}/>
                    <circle cx="12" cy="12" r="4" fill="white"/>
                 </svg>
          </span>
          <span>{props.children}</span>
       </div>
   )
}

export default CustomRadio;