import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

// eslint-disable-next-line react/prop-types
const Courses = ({handleSelectToCart}) => {
    const [courses , setCourses] = useState([]);
    useEffect( () => {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    })
    return (
        <div className="md:w-4/5 ml-4 mx-auto grid grid-cols-3 gap-3 items-center">
            {
                courses.map(course => <Course 
                    key={course.id}
                    handleSelectToCart={handleSelectToCart}
                    course={course}></Course>)
            }
        </div>
    );
};

export default Courses;