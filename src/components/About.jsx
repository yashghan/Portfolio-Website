import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Yash Ghan, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className='text-lg'>
              I like to solve problems and have strong interest in data structures and algorithms and their implementation.
              I have experience of working in multiple full-stack projects and have participated in many national level hackathons.
              I have worked on frontend, backend , databases and have collaboratted in multiple full-stack projects having 
              involving complex architectures. I am very keen to contribute to this wonderful domain of development.
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
