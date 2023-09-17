import { FaDollarSign } from 'react-icons/fa';
import { IoBookOutline } from 'react-icons/io5';

/* eslint-disable react/prop-types */


const Course = ({course,handleSelectToCart}) => {
    const {title,cover,description,price,creditHour} = course;
    return (
        <div className='border-solid border-white rounded-2xl shadow-lg p-4 max-w-sm mb-3'>
            <img src={cover} alt=""  />
            <h2 className='font-semibold text-lg mb-3'>{title}</h2>
            <p className='mb-3 font-normal text-sm text-gray-400'>{description}</p>
            <div className="flex items-center gap-2 mb-4">
                <p><FaDollarSign></FaDollarSign></p>
                <p className='text-sm text-gray-500'>Price : {price}</p>
                <p className='pl-4'>
                    <IoBookOutline></IoBookOutline>
                </p>
                <p className='text-sm text-gray-500'> Credit: {creditHour}hr</p>
            </div>
            <button onClick={()=>handleSelectToCart(course)} className='bg-blue-500 
             text-lg
             font-semibold
             text-white rounded-lg
             p-2
             w-full
             '>Select</button>
        </div>
    );
};

export default Course;