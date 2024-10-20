'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function About() {
    const route=useRouter()
  return (

    
         <div>
      <div className='bg-black h-20 text-white text-end space-x-28 pt-5 text-2xl pr-24 '>
         
      <button className='w-11 h-6 p-1' onClick={()=>route.push("/home")}>Home</button>
      <button className='w-11 h-6 p-1' onClick={()=>route.push("/about")}>About</button>
      <button className='w-15 h-6 p-1' onClick={()=>route.push("/contact")}>Contact</button >
      <button className='w-15 h-6 p-1' onClick={()=>route.push("/projects")}>projects</button >

         </div >
         <div className='h-'>
                <div className='flex justify-center pt-24 h-screen w-screen bg-gradient-to-r from-green-900 from-10% via-green-800 via-30% to-emerald-500 to-90% ... '>
                    <img 
                        src='https://c8.alamy.com/comp/JK3HH2/integration-between-programming-languages-and-code-development-of-JK3HH2.jpg' 
                        alt='Sidra Farooq' 
                        className='h-96 w-96 rounded-lg shadow-lg pl-11' 
                    />
                
                <div className='flex justify-center  text-black text-inherit  pr-28 '>
                    
                    <p className='pl-20 text-2xl'>
                    <b>Welcome to my About page!.</b> <i>I am a dedicated web developer with a strong foundation in HTML, CSS, and TypeScript. My journey in web development began with a fascination for how websites work, and it has since evolved into a passion for creating engaging and user-friendly digital experiences. Currently, I'm expanding my skill set by learning Next.js and React.js, which allows me to build dynamic applications that enhance user interaction and functionality. I love tackling challenges and finding innovative solutions that bring ideas to life. Whether it’s developing a responsive design or optimizing performance, I am committed to delivering high-quality work.
                    </i></p>
                    </div>
                </div>
            </div>
        </div>

       
  )
}

export default About