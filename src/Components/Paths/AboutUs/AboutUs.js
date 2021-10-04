import React from 'react';
import Slide from 'react-reveal/Slide';

const AboutUs = () => {
    return (
        <div>
            <Slide left>
                <div className="font-sans mx-auto p-16 text-4xl text-center w-10/12 leading-loose prose">
                    <blockquote>
                        Whatever discipline you choose, you’ll find your old ideas challenged and your new ideas embraced. Goldsmiths is a place where together we are creating the knowledge of the future.
                    </blockquote>
                </div>
            </Slide>

            <div className='mt-14'>
                <h1 className='font-semibold text-7xl text-center'>WHO WE ARE</h1>
                <div className='flex mx-auto p-36 w-11/12'>
                    <div className='flex-1 flex-col'>
                        <h1 className='text-3xl mb-4 font-semibold'>An Incubator for Ideas</h1>
                        <p className='text-2xl w-2/3'>Many companies foster idea incubation by clustering workers together in collaborative environments. Especially in the case of software companies, employees are actively encouraged to spend work time pondering issues and ways to solve them. Cooperative groups work best for incubation because other members of the group can identify strengths and weaknesses of the idea, resulting in a stronger finished product.
                        </p>
                    </div>
                    <div>
                        <img src="http://bookflare.themesflat-addons.com/images/about/detail-1.jpg" alt="" />
                    </div>
                </div>

                <div className='flex mx-auto p-36 w-11/12'>
                    <div className="mr-32">
                        <img src="http://bookflare.themesflat-addons.com/images/about/detail-2.jpg" alt="" />
                    </div>
                    <div className='flex-1 flex-col'>
                        <h1 className='text-3xl mb-4 font-semibold'>An Incubator for Ideas</h1>
                        <p className='text-2xl w-auto'>Companies need to rethink their innovation strategies in an increasingly disruptive business environment. The long-term success of large established companies depends not only on their ability to leverage their current capabilities and improve efficiency but also on taking risks and exploring unknown areas. To meet this challenge, established companies are increasingly relying on corporate incubators to fuel innovation and growth with entrepreneurial mindset.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;