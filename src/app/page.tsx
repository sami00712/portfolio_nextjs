'use client'
import Image from "next/image"
import profile from "/public/profile.jpeg" 
import Typewriter from "typewriter-effect"


export default function Home(){
  return (
    <div className="">
      <div className="justify-center flex p-2 m-2">
        <Image src={profile} alt="Pic" height={100} width={200} className="rounded-r-full rounded-b-full rounded-l-full  border-dashed border-blue-500 border-2 "/>
      </div>
      <div className="mb-24">
        <div>
          <h1 className="font-medium text-5xl text-yellow-400 font-serif ml-7 mb-14 mt-10">
          <Typewriter
  options={{
    strings: ['Hello, My name is Muhammad Sami', ' I am Frontend Web-Developer'],
    autoStart: true,
    loop: true,
  }}
/>
          </h1>
          {/* <h1 className="font-medium text-4xl text-blue-500 font-sans ml-80 mt-4">
            I'm Frontend Web-Developer
          </h1> */}
        </div>
        <div className="font-serif font-normal mt-5 mb-10 text-white">
          <p>I am currently enrolled in the Certified Cloud Applied Generative AI Engineering course under the 
            Governor Sindh Initiative. This program is helping me grasp advanced concepts in cloud computing and
             generative AI, enabling me to gain expertise in this field. Additionally, I am proficient in TypeScript,
              which equips me to successfully tackle web development and software engineering projects. My goal is to 
              leverage my technical skills to develop innovative solutions, and I aim to share my journey and accomplishments
               through this portfolio.</p>
        </div>
      </div>

    </div>
  )
}