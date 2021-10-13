import React, { useEffect, useState } from 'react';
import AllCourseStyling from './AllCourseStyling';
import Fade from 'react-reveal/Fade';
import useAuth from '../../Hooks/useAuth';

const Courses = () => {
    const { user } = useAuth();
    const [allCourses, setAllCourses] = useState([]);
    useEffect(() => {
        fetch('./allCourses.JSON')
            .then(res => res.json())
            .then(data => setAllCourses(data));
    }, [])

    return (
        <div>

            {user.email && <Fade right><div className="font-black italic m-10 react-reveal text-6xl text-center text-gray-500">Welcome, {user.displayName}!</div></Fade>}
            <Fade left cascade>
                <div>
                    <h1 className='font-bold p-10 text-5xl text-center'>Courses</h1>
                </div>
                <div>
                    <h1 className="mx-auto text-3xl text-center w-2/3">Smply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h1>
                </div>
            </Fade>

            <div className="grid lg:grid-cols-3 p-36 gap-8">
                {
                    allCourses.map(course => <AllCourseStyling course={course} key={course.id}></AllCourseStyling>)
                }
            </div>
        </div>
    );
};

export default Courses;