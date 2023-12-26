import React from 'react'
import Button from './Button'
export default function ImplementedByJsOnly() {
  return (
    <>
    
      <h1 className="text-3xl caret-red-500">Onclicking the colors . Background color changes</h1>
      <div className='w-full min-w-fit min-h-10 h-fit flex-row mt-96 space-x-5 border-x-gray-300 '>
        <Button color = {"red"}  ></Button>
        <Button color = {"blue"}></Button>
        <Button color = {"green"}></Button>
        <Button color = {"purple"}></Button>
        <Button color = {"pink"}></Button>
        <Button color = {"cyan"}></Button>
        <Button color = {"orange"}></Button>
        <Button color = {"gold"}></Button>
        <Button color = {"grey"}></Button>
        <Button color = {"black"}></Button>
        
    </div>
      </>
  )
}
