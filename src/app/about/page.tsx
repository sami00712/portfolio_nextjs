import Image from "next/image"
import html from "/public/html.png"
import css from "/public/css.png"
import javascript from "/public/javascript.png"
import typescript from "/public/typescript.png"
import pns from "/public/pns.png"
import tailwind from "/public/tailwind.png"


function About(){
    return(
        <main>
            <div>
                <h1 className="text-5xl font-serif text-white text-center mt-3">About Me</h1>
            </div>
            <div className="border w-fit ml-6 p-3 rounded-2xl bg-gray-500 mb-32 mt-6 hover:bg-gray-700 ring-4 ring-gray-700 hover:ring-slate-500">
            <div>
                <h1 className="font-serif text-3xl text-blue-400 ml-12">My Skills:</h1>
            </div>
            <div className="flex mt-4 ml-7  w-fit rounded-xl ring border ring-amber-400 hover:bg-black">
                <Image src={html} alt="html" width={100} height={100} className="ml-10 my-3  rounded-xl ring-2 border-orange-600 ring-orange-300 border-2"/>
                <Image src={css} alt="css" width={100} height={100}  className="ml-28 my-3  rounded-xl ring-2 border-orange-600 ring-orange-300 border-2"/>
                <Image src={javascript} alt="javascript" width={100} height={100}  className="ml-28 my-3  rounded-xl ring-2 border-orange-600 ring-orange-300 border-2"/>
                <Image src={typescript} alt="typescript" width={100} height={100}  className="ml-28 my-3  rounded-xl ring-2 border-orange-600 ring-orange-300 border-2"/>
                <Image src={pns} alt="nextjs" width={100} height={100}  className="ml-28 my-3  rounded-xl ring-2 border-orange-600 ring-orange-300 border-2"/>
                <Image src={tailwind} alt="tailwind-css" width={100} height={100}  className="ml-28 mr-7 my-3  rounded-xl ring-2 border-orange-600 ring-orange-300 border-2"/>
            </div>
           
            <div>
                <h1 className="font-serif text-3xl text-yellow-400 mt-3 ml-12">
                    Education:
                </h1>
            </div>
            <div className="border w-fit ml-7 mt-3 mb-6 ring rounded-xl ring-blue-500 hover:bg-black">
                <div className="font-serif flex text-white ml-3 mt-3 mb-3 mr-6">
                    <div className="ml-4 w-fit p-2 rounded-xl ring-2 border-orange-600 ring-orange-300 border-2 ">
                        <h1 className="text-center font-normal text-orange-500 text-base">MATRIC</h1>
                        <p>Completed From </p>
                        <p>Higher Secondary</p>
                        <p>School In 2k23.</p>
                    </div>
                    <div className=" w-fit ml-28 p-2  rounded-xl ring-2 border-orange-600 ring-orange-300 border-2">
                        <h1 className="text-center font-normal text-orange-500 text-base">11th</h1>
                        <p>Completed In Last</p>
                        <p>Year From Same</p>
                        <p>Institute.</p>
                    </div>
                    <div  className="w-fit ml-28 p-2  rounded-xl ring-2 border-orange-600 ring-orange-300 border-2">
                        <h1 className="text-center font-normal text-orange-500 text-base">Intermediate</h1>
                        <p>Ongoing in</p>
                        <p>Same Institute.</p>
                    </div>
                    <div  className=" w-fit ml-28 p-2  rounded-xl ring-2 border-orange-600 ring-orange-300 border-2">
                        <h1 className="text-center font-normal text-orange-500 text-base">Diploma</h1>
                        <p>Ongoing In Civil</p>
                        <p>Engineering From</p>
                        <p>Technical College.</p>
                    </div>
                    <div  className=" w-fit ml-28 p-2  rounded-xl ring-2 border-orange-600 ring-orange-300 border-2">
                        <h1 className="text-center font-normal text-orange-500 text-base">Typescript</h1>
                        <p>Completed From</p>
                        <p>Governor Initiative</p>
                        <p>In June 2k24.</p>
                    </div>
                </div>
            </div>
            </div>
        </main>
    )
}

export default About