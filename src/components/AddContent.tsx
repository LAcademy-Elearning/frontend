import React from 'react'
import AddCourseArea from '../atoms/AddCourseArea'
import { FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const AddContent = () => {
  return (
    <AddCourseArea>
      <div className='flex justify-between items-center'>
        <h2 className='text-lg'>Add Content</h2>
        <Link to={"/courses"}>
        <div className='text-lg hoverEffect flex items-center justify-center rounded-full h-8 w-8'>
        <FaXmark/>
        </div>
        </Link>
      </div>
      <div className='mt-5 '>
        <textarea className='w-full outline-none rounded-lg text-black px-4  pt-4' placeholder='type your course content' name=""></textarea>
      </div>
    </AddCourseArea>
  )
}

export default AddContent