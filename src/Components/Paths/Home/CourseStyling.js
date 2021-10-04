import React from 'react';
import Fade from 'react-reveal/Fade';
const CourseStyling = (props) => {
    const { course_name, author_name, description, img, rating, reviews, price } = props.course;
    return (
        <Fade top cascade>
            <div className=" ring-4 ring-gray-300 rounded-xl shadow-xl">
                <img className="rounded-t-xl  w-full  object-cover" src={img} alt="" ></img>
                <div className="flex flex-col p-7">
                    <div className="flex flex-row">
                        <div className=" text-xs uppercase bg-yellow-100 p-1 px-2 text-yellow-700 rounded-2xl line-clamp-1 hover:line-clamp-none">
                            {author_name}
                        </div>
                    </div>
                    <div>
                        <p className="text-base text-gray-600 mt-1 line-clamp-5 hover:line-clamp-none font-black">
                            {course_name}
                        </p>
                        <p className="text-base text-gray-600 mt-1 line-clamp-5 hover:line-clamp-none font-medium">
                            {description}
                        </p>
                        <p className="text-base text-gray-600 mt-1 line-clamp-5 hover:line-clamp-none font-serif">
                            Rating : {rating}
                        </p>
                        <p className="text-base text-gray-600 mt-1 line-clamp-5 hover:line-clamp-none font-serif">
                            Reviews : {reviews}
                        </p>
                        <p className="text-base text-gray-600 mt-1 line-clamp-5 hover:line-clamp-none font-serif">
                            Price : ${price}
                        </p>
                    </div>
                    <div>
                        {/* <button className="bg-white border border-gray-400 font-semibold hover:bg-gray-100 mt-4 px-4 py-2 rounded shadow text-gray-800 w-2/3 ">
                        Details
                    </button> */}
                    </div>
                </div>
            </div>
        </Fade>

    );
};

export default CourseStyling;