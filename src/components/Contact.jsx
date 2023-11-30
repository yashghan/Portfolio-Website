import React from 'react'

const Contact = () => {
  return (
    <>
    {/* <div className='h-4'></div> */}
    <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/78e45ed1-ac7a-4135-b8f9-76b5752278f2" className='flex flex-col max-w-[600px] w-full'>
            <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '></p>
              <p className='mt-16 text-lg'></p>
            </div>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - yashdghan@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
    </>
  )
}

export default Contact