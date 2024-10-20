'use client'
import { useRouter } from 'next/navigation'
import React from 'react'


function Home() {
  const route= useRouter()
  return (
    

    <div>
      <div className='bg-black h-20 text-white text-end space-x-28 pt-5 text-2xl pr-24 '>
         
      <button className='w-11 h-6 p-1' onClick={()=>route.push("/home")}>Home</button>
      <button className='w-11 h-6 p-1' onClick={()=>route.push("/about")}>About</button>
      <button className='w-15 h-6 p-1' onClick={()=>route.push("/contact")}>Contact</button >
      <button className='w-15 h-6 p-1' onClick={()=>route.push("/projects")}>projects</button >

         </div >
         <main className='flex justify-center'>
         <div className=' h-screen w-screen bg-gradient-to-r from-green-900 from-10% via-green-800 via-30% to-emerald-500 to-90% ...'>
  <div className='flex items-center justify-center h-full space-x-3 pr-20 pb-52'>
    <div>
      <h1 className=' text-black text-inherit text-3xl pl-4'>
        <i><b>Hello!</b></i> <br />
       <i><b> My name is Sidra Farooq,</b><br /> AI Engineering student and web developer.<br />
        Passionate about building innovative user-friendly solutions.</i> 
    
      </h1>
      
    </div>
    <img 
      src="https://img.freepik.com/premium-photo/young-software-developer-ai-generated_1059430-18874.jpg?w=740" 
      alt="Sidra Farooq" 
      className="w-72 h-72 rounded-full border-4 border-black shadow-lg "
    />
  
 
      </div>
</div>

</main>
</div>
         
        
  )
}

export default Home