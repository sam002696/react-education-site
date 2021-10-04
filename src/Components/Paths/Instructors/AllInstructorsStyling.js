import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import Fade from 'react-reveal/Fade';

const AllInstructorsStyling = (props) => {
    const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
    const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
    const instagram = <FontAwesomeIcon icon={faInstagramSquare} />
    const { name, profession, img, description } = props.instructor;
    return (
        <Fade top cascade>
            <div className=" ring-4 ring-gray-300 rounded-xl shadow-xl">
                <img className="rounded-t-xl  w-full  object-cover" src={img} alt="" ></img>
                <div className="flex flex-col p-7">
                    <div className="flex flex-row">
                        <div className=" text-xs uppercase bg-yellow-100 p-1 px-2 text-yellow-700 rounded-2xl line-clamp-1 hover:line-clamp-none">
                            {name}
                        </div>
                    </div>
                    <div>
                        <p className="text-base text-gray-600 mt-1 line-clamp-5 hover:line-clamp-none font-black">
                            {profession}
                        </p>
                        <p className="text-base text-gray-600 mt-1 line-clamp-5 hover:line-clamp-none font-medium">
                            {description}
                        </p>
                    </div>
                    <div className='bg-gray-200 mt-4 rounded-full text-3xl text-gray-500 w-2/4'>
                        <p className='mx-8 p-1.5'> {facebook} {twitter} {instagram}</p>
                    </div>
                </div>
            </div>
        </Fade>

    );
};

export default AllInstructorsStyling;