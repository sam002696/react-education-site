import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className=" bg-gray-700 flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="animate-bounce-slow fill-current mr-2 w-1/3" width="60" height="60" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssketch="http://www.bohemiancoding.com/sketch/ns">
                        <title>Education</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g id="colored" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketchtype="MSPage">
                            <g id="Marketing_sliced" sketchtype="MSLayerGroup" transform="translate(-720.000000, -120.000000)"></g>
                            <g id="Marketing" sketchtype="MSLayerGroup" transform="translate(-712.000000, -120.000000)" stroke="#314E55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <g id="Desk" transform="translate(716.000000, 115.000000)" sketchtype="MSShapeGroup">
                                    <path d="M43,32 L43,45 C43,45 36.4469738,49 26,49 C15.5530262,49 9,45 9,45 L9,32" id="Rectangle-1624" fill="#D8D8D8"></path>
                                    <path d="M8.15678015,10.4405946 C7.81773976,9.38915597 8.39730843,8.81230601 9.44669123,9.15068349 L33.1790439,16.8032711 C34.2304825,17.1423115 35.3583514,18.2715733 35.6967289,19.3209561 L43.3493165,43.0533088 C43.6883569,44.1047474 43.1087882,44.6815973 42.0594054,44.3432199 L18.3270527,36.6906322 C17.2756141,36.3515918 16.1477453,35.2223301 15.8093678,34.1729473 L8.15678015,10.4405946 Z" id="Rectangle-1623" fill="#D8D8D8" transform="translate(25.753048, 26.746952) rotate(-45.000000) translate(-25.753048, -26.746952) "></path>
                                    <path d="M39,34 L39,52" id="Line"></path>
                                    <circle id="Oval-1441" fill="#D26CBA" cx="39" cy="55" r="3"></circle>
                                    <path d="M10,27 L14,25" id="Line"></path>
                                    <path d="M14,29 L18,27" id="Line"></path>
                                </g>
                            </g>
                        </g></svg>
                    <span className="font-serif lg:flex-grow text-2xl">BRIGHT EDU </span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow-0 lg:flex lg:items-center lg:w-auto">
                    <div className="font-serif lg:flex-grow text-2xl ">
                        <Link to='/home' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:animate-bounce-slow">
                            Home
                        </Link>
                        <Link to='/courses' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:animate-bounce-slow">
                            Courses
                        </Link>
                        <Link to='/instructors' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 hover:animate-bounce-slow">
                            Instructors
                        </Link>
                        <Link to='/aboutus' className=" text-white block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white hover:animate-bounce-slow">
                            About Us
                        </Link>
                    </div>
                </div>
            </nav>
            <div>

            </div>
        </div>
    );
};

export default Header;