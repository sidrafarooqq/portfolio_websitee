'use client'
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Projects = () => {


  const route= useRouter()
  
  return (
   <div>

    <div className='bg-black h-20 text-white text-end space-x-28 pt-5 text-2xl pr-24 '>
         
      <button className='w-11 h-6 p-1' onClick={()=>route.push("/home")}>Home</button>
      <button className='w-11 h-6 p-1' onClick={()=>route.push("/about")}>About</button>
      <button className='w-15 h-6 p-1' onClick={()=>route.push("/contact")}>Contact</button >
      <button className='w-15 h-6 p-1' onClick={()=>route.push("/projects")}>projects</button >

         </div >

    <div className=" h-screen w-screen bg-gradient-to-r from-green-900 from-10% via-green-800 via-30% to-emerald-500 to-90% ...">
      <div className="text-center">
       
        <p className="text-lg mb-8 pt-7">
          Command-Line Interface (CLI) Projects
          <br />
          Below are some of the CLI-based projects I've developed, 
          <br/>showcasing my skills.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/*Calculator*/}
        <div className="flex items-center">
          
          <a
            href="https://www.npmjs.com/package/s6ra3_calculator"
            className="text-white  hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/s6ra3_calculator
          </a>
        </div>
        {/* Number Guessing Game*/}
        <div className="flex items-center">
          
          <a
            href="https://www.npmjs.com/package/sidra_farooq_cli_number_guessing"
            className="text-white hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/sidra_farooq_cli_number_guessing
          </a>
        </div>
        {/*ATM*/}
        <div className="flex items-center">
         
          <a
            href="https://www.npmjs.com/package/sidra_cli_atm"
            className="text-white hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/sidra_cli_atm
          </a>
        </div>
        {/*Todo List*/}
        <div className="flex items-center">
          
          <a
            href="https://www.npmjs.com/package/siddz123-todooo-app"
            className="text-white hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/siddz123-todooo-app
          </a>
        </div>
        {/*Word Counter*/}
        <div className="flex items-center">
          
          <a
            href="https://www.npmjs.com/package/sd_word_counter"
            className="text-white hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/sd_word_counter
          </a>
        </div>
        {/*Countdown Timer*/}
        <div className="flex items-center">
          
          <a
            href="https://www.npmjs.com/package/sid_countdown_timer"
            className="text-white hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/sid_countdown_timer
          </a>
        </div>
        {/*Adventure Game*/}
        <div className="flex items-center">
         
          <a
            href="https://www.npmjs.com/package/sid_adventure_game"
            className="text-white hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/sid_adventure_game
          </a>
        </div>
        {/*amazon website */}
        <div className="flex items-center">
          
          <a
            href="https://github.com/sidrafarooqq/portfolio.git"
            className="text-white hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/sidrafarooqq/portfolio.git
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;