import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';


const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || '/home';
    const element = <FontAwesomeIcon icon={faGoogle} />
    const facebook = <FontAwesomeIcon icon={faFacebookSquare} />
    const { googleSignIn } = useAuth();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect)
            });
    }
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-200 p-10">
                <div className="bg-white p-16 rounded shadow-lg w-2/3">

                    <h2 className="text-3xl font-bold mb-10 text-gray-800">Please Log In</h2>

                    <form className="space-y-5">

                        {/* <div>
                            <label className="block mb-1 font-bold text-gray-500">Name</label>
                            <input type="text" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" />
                        </div> */}

                        <div>
                            <label className="block mb-1 font-bold text-gray-500">Email</label>
                            <input type="email" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" />
                        </div>

                        <div>
                            <label className="block mb-1 font-bold text-gray-500">Password</label>
                            <input type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" />
                        </div>

                        <div className="flex items-center">
                            <input type="checkbox" id="agree" />
                            <label htmlFor="agree" className="ml-2 text-gray-700 text-sm">I agree to the terms and privacy.</label>
                        </div>

                        <button type='submit' className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300 font-semibold"> SUBMIT </button>

                    </form>
                    <div className='flex items-center justify-between mt-3 mx-auto w-2/3'>
                        <hr className='border-2 rounded-full w-2/3' /> <span className='font-medium m-10 text-2xl text-center text-gray-400'>OR</span><hr className='border-2 rounded-full w-2/3' />
                    </div>
                    <div className='text-center'>
                        <div className='bg-red-600 border-2 hover:ring-4 mx-auto p-3 ring-2 ring-red-400 rounded w-1/3 mb-3'>
                            <button onClick={handleGoogleSignIn} className='flex font-semibold items-center mx-auto text-white'> <span className='mx-2 text-2xl'>{element}</span> Google Sign In</button>
                        </div>
                        <div className=' border-2 hover:ring-4 mx-auto p-3 ring-2 ring-blue-400 rounded w-1/3 bg-blue-700'>
                            <button className='flex font-semibold items-center mx-auto text-white'> <span className='mx-2 text-2xl'>{facebook}</span> Facebook Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;