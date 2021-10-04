import React, { useEffect, useState } from 'react';
import AllInstructorsStyling from './AllInstructorsStyling';
import Fade from 'react-reveal/Fade';

const Instructors = () => {
    const [allInstructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('./allInstructor.JSON')
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, [])
    return (
        <div>
            <Fade right cascade>
                <div>
                    <h1 className='font-bold p-10 text-5xl text-center'>
                        Instructors</h1>
                </div>
                <div>
                    <h1 className="mx-auto text-3xl text-center w-2/3">With strong critical thinking skills, teachers are able to consider the best interests of the students while also working within their institution’s goals and standards. Teachers of primary and secondary schools must also remain aware of parents’ expectations for learning and discipline and ensure that the classroom is a safe and nurturing environment.</h1>
                </div>
            </Fade>

            <div className="grid lg:grid-cols-3 p-36 gap-8">
                {
                    allInstructors.map(instructor => <AllInstructorsStyling instructor={instructor} key={instructor.id}></AllInstructorsStyling>)
                }
            </div>
        </div>
    );
};

export default Instructors;