import React from 'react'
import AddCourseArea from '../atoms/AddCourseArea'
import { FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const AddCourse = () => {
  return (
    <AddCourseArea>
      <div className='flex justify-between items-center'>
        <h2 className='text-lg'>Name of the course</h2>
        <Link to={"/courses"}>
        <div className='text-lg hoverEffect flex items-center justify-center rounded-full h-8 w-8'>
        <FaXmark/>
        </div>
        </Link>
      </div>
    </AddCourseArea>
  )
}

export default AddCourse