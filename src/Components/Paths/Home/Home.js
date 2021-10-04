import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseStyling from './CourseStyling';
import InstructorStyling from './InstructorStyling';
import Roll from 'react-reveal/Roll';
import LightSpeed from 'react-reveal/LightSpeed';


const Home = () => {
    const [courses, setCourse] = useState([]);
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])
    useEffect(() => {
        fetch('./instructors.JSON')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    return (
        <div>
            <div className='bg-gray-100 flex justify-center m-12 p-10 rounded-3xl'>
                <Roll left cascade>
                    <div className='flex-col self-center w-1/3'>
                        <h1 className='font-bold text-5xl'>Build Skills With Experts Any Time, Anywhere</h1>
                        <p className='mt-10 text-2xl'>Education connects you with the stories, theories and accomplishments of faraway cultures and generations. It offers you a body of knowledge greater than you can ever gain on your own in one lifetime.</p>
                        <Link to='/courses'> <button className="bg-white border border-gray-400 font-semibold hover:bg-gray-400 hover:text-white mt-16  px-4 py-2 rounded shadow text-gray-800 w-2/3 ">
                            Courses
                        </button>
                        </Link>
                    </div>
                </Roll>

                <div>
                    <img src='https://themes.envytheme.com/ecademy/wp-content/uploads/2020/05/banner-img2.png' alt="study" />
                </div>
            </div>
            <LightSpeed left cascade>
                <div>
                    <h1 className='font-bold p-10 text-5xl text-center'>Discover Our Popular Courses</h1>
                </div>
                <div>
                    <h1 className="mx-auto text-3xl text-center w-2/3">Most popular courses demonstrate a continued demand for AI-related content across professions and lifestyles. Employers and employees alike are realizing the crucial role technical skills will have - and already have - in the future of work. Meanwhile, individuals unaffiliated with tech jobs are also learning about AI-related subjects, likely to better understand the broader implications of living in an increasingly digital-first society.</h1>
                </div>
            </LightSpeed>

            <div className="grid lg:grid-cols-3 p-36 gap-8">
                {
                    courses.map(course => <CourseStyling course={course} key={course.id}></CourseStyling>)
                }
            </div>

            <LightSpeed right cascade>
                <div>
                    <h1 className='font-bold p-10 text-5xl text-center'>Our Skilled Instructors</h1>
                </div>
                <div>
                    <h1 className="mx-auto text-3xl text-center w-2/3">Life skills instructors teach clients how to manage everyday tasks to help them gain independence and move forward in life. Life skills instructors work one-on-one or in small groups to help students or clients with unique challenges develop basic life skills, such as cooking, hygiene, and money skills.</h1>
                </div>
            </LightSpeed>

            <div className='grid lg:grid-cols-3 p-36 gap-8'>
                {
                    instructors.map(instructor => <InstructorStyling instructor={instructor} key={instructor.id}></InstructorStyling>)
                }
            </div>
        </div>
    );
};

export default Home;