import React from 'react'
import { useParams } from 'react-router-dom'

const View = () => {
    const params=useParams()
  return (
   <div className='container'>
    <div className='row'>
        <h1>ID:{params.id}</h1>
        <div className='col-lg-6'>
            username:person1
        </div>
        <div className='col-lg-6'>
            Email:person1@gmail.com
        </div>
        <div className='col-lg-6'>
            country:india
        </div>
        <div className='col-lg-6'>
            state:tamil nadu
        </div>
        <div className='col-lg-6'>
            city:kannya kumari
        </div>
        <div className='col-lg-6'>
           DOD:23-4-2000
        </div>
        <div className='col-lg-6'>
       Gender:male
        </div>
    </div>
   </div>
)
}

export default View