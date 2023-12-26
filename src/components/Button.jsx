import React from 'react'

export default function Button({color}) {

    const clickHandler = function(){
         document.querySelector("body").style.backgroundColor = color
    }

  return (
    <button onClick={clickHandler}  className=' gap-10' style={{backgroundColor :color , color : "#ffff" } }>{color}</button>
  )
}
