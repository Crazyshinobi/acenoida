import React from 'react'
import Card from '../components/Card'

const FloorPlan = () => {
  return (
    <div className='my-14'>
        <h1 className='text-center font-body text-4xl font-bold mb-8'>Floor Plan</h1>
        <div className="flex items-center justify-center gap-8">
            <Card floor={"2 BHK"} />
            <Card floor={"3 BHK"}/>
            <Card floor={"4 BHK"}/>
        </div>
    </div>
  )
}

export default FloorPlan