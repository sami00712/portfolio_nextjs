import Image from 'next/image';
import ab from "/public/ab.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState } from 'react';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faNpm, faGithub, faGit, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Cont(){
    return(

        <main className='flex mb-32'>
            <div className='border w-fit text-center p-5 ml-6 mt-5 bg-white rounded-2xl'>
                <div className='flex justify-center'>
                <Image src={ab} alt='Pic' width={190} height={100} className='
                rounded-2xl '/></div>
            <div>
                <h1 className="text-4xl font-bold font-serif text-white m-4 bg-gray-500 rounded-xl hover:bg-orange-500 hover:text-black">Contact Us</h1>
                <div className='flex'>
            <a href="https://www.facebook.com/sami.qaimkhani.37" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} width={40} className='text-blue-700 hover: transition-transform transform hover:scale-125'/>
            </a>
            <a href="www.linkedin.com/in/muhammad-sami-359601281" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} width={40} className='ml-6 text-blue-700 hover: transition-transform transform hover:scale-125'/>
            </a>
            <a href="https://www.npmjs.com/~muhammad_sami007" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faNpm} width={40} className='ml-6 text-red-600 hover: transition-transform transform hover:scale-125'/>
            </a>
            <a href="https://github.com/sami00712" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithubSquare} width={40} className='ml-6 hover: transition-transform transform hover:scale-125'/>
            </a>
        </div>
            </div>
            </div>
            
             <div className='ml-10 mt-5 w-full mr-10 '>
               <form  className=" mx-auto p-6 bg-white rounded-lg shadow-md">
               <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
               <div className="mb-4">
               <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
             </div>
              <div className="mb-4">
               <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
             </div>
              <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
                 <textarea id="message" name="message" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" rows={4} ></textarea>
                </div>
             <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600">Submit</button>
             </form>
             </div>
            
        </main>
    )
}

export default Cont