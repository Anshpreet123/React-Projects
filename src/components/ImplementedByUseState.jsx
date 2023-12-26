import React, { useState } from 'react'

export default function ImplementedByUseState() {

    const [color , setColor] = useState("black");
    document.querySelector("body").style.backgroundColor = color
  return (
   <>
   {/* <div className='w-full h-screen'  style={{backgroundColor :color, color : "#ffff" } }></div> */}
    <h1 className="text-3xl caret-red-500">Onclicking the colors . Background color changes</h1>
      <div className='w-full min-w-fit min-h-10 h-fit flex-row mt-96 space-x-5 border-x-gray-300 '>
           <button onClick={()=>setColor("red")} className=' gap-10' style={{backgroundColor :"red" , color : "#ffff" } }>red</button>
           <button onClick={()=>setColor("blue")} className=' gap-10' style={{backgroundColor :"blue" , color : "#ffff" } }>blue</button>
           <button onClick={()=>setColor("green")} className=' gap-10' style={{backgroundColor :"green" , color : "#ffff" } }>green</button>
           <button onClick={()=>setColor("gold")} className=' gap-10' style={{backgroundColor :"gold" , color : "#ffff" } }>gold</button>
           <button onClick={()=>setColor("purple")} className=' gap-10' style={{backgroundColor :"purple" , color : "#ffff" } }>purple</button>
           <button onClick={()=>setColor("pink")} className=' gap-10' style={{backgroundColor :"pink" , color : "#ffff" } }>pink</button>

        
    </div></>
  )
}
