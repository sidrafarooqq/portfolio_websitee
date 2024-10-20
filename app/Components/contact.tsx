'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function Contact() {
    const route=useRouter()
  return (
    
    
        <div>
        <div className='bg-black h-20 text-white text-end space-x-28 pt-5 text-2xl pr-24 '>
         
         <button className='w-11 h-6 p-1' onClick={()=>route.push("/home")}>Home</button>
         <button className='w-11 h-6 p-1' onClick={()=>route.push("/about")}>About</button>
         <button className='w-15 h-6 p-1' onClick={()=>route.push("/contact")}>Contact</button >
         <button className='w-15 h-6 p-1' onClick={()=>route.push("/projects")}>projects</button >
   
            </div >
            <div className=' h-screen w-screen bg-gradient-to-r from-green-900 from-10% via-green-800 via-30% to-emerald-500 to-90% ...'>
                <div> <h1 className='flex justify-center text-4xl pt-5'> <b>Contact me </b></h1>
                 <br />
                <p className='flex justify-center text-3xl text-inherit'> <b>whether you have questions, want to collaborate on a project,  . or would like to get in touch, feel free to reach out through my social links below. I look forward to connecting with you!.</b></p></div>
                <div className=" space-x-28 flex justify-center pt-20">
        <a href="https://web.facebook.com/sidra.mfarooq" target="_blank" rel="noopener noreferrer">
          <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s" alt="Facebook" width={70} height={70} />
        </a>
        <a href="https://www.instagram.com/sidra_farooq._?igsh=MW54bXpzanp4eGx5dA==" target="_blank" rel="noopener noreferrer">
          <img src="https://img.freepik.com/premium-vector/instagram-logo-vector_768467-330.jpg" alt="Instagram" width={70} height={70} />
        </a>
        <a href="https://www.linkedin.com/in/sidra-farooq-1415282b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="LinkedIn" width={70} height={70} />
        </a> 
        <a href='https://github.com/sidrafarooqq' target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" width={70} height={70} />
        </a>
      
        </div>
        </div>
        </div>
    
  )

}

export default Contact