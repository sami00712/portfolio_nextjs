import Image from "next/image"
import calculator from "/public/calculator.jpeg"
import portfolio from "/public/lio.jpeg"
import todo from "/public/todo.jpeg"
import timer from "/public/timer.jpeg"
import curency from "/public/curency.jpeg"
import fbclone from "/public/fbclone.jpeg"
import game from "/public/game.jpeg"
import resume from "/public/resume1.jpeg"
import builder from "/public/builder.jpeg"
import atm from "/public/atm.jpeg";

function Pro(){
    return(
        <main>
            <div>
                <h1 className="text-4xl text-amber-400 text-center font-medium font-serif mt-5">MY PROJECTS</h1>
            </div>
            <div>
                <div className="bg-black border rounded-lg w-fit ml-20 mt-4 p-5 mb-32 border-orange-500 ring-1 ring-orange-300">
                    <div className="text-xl font-medium flex ">
                        <div className="border w-fit ml-5  border-orange-500 hover:ring-4 ring-orange-500">
                        <a href="https://github.com/sami00712/calculator_html_css_project" target="blank">   
                       <Image src={calculator} alt="calculator" width={200} height={200}/> 
                       <h3 className="text-center bg-black text-orange-500">Calculator</h3>
                       </a> 
                       </div>
                       <div className="border w-fit ml-5   border-orange-500 hover:ring-4 ring-orange-500">
                       <a href="https://github.com/sami00712/personal_portfolio_website" target="blank">
                       <Image src={portfolio} alt="portfolio" width={225} height={200}/>
                       <h3 className="text-center bg-black text-orange-500">Portfolio</h3>
                       </a>
                       </div>
                       <div className="border w-fit ml-5  border-orange-500 hover:ring-4 ring-orange-500">
                        <a href="https://github.com/sami00712/todo-list" target="blank">
                       <Image src={todo} alt="todo" width={225} height={200}/>
                       <h3 className="text-center bg-black text-orange-500">Todo List</h3>
                       </a>
                       </div>
                       <div className="border w-fit ml-5  border-orange-500 hover:ring-4 ring-orange-500">
                        <a href="https://github.com/sami00712/countdown_timer" target="blank">
                       <Image src={timer} alt="timer" width={153} height={100}/>
                       <h3 className="text-center bg-black text-orange-500 text-base">CountDown Timer</h3>
                       </a>
                       </div>
                       <div className="border w-fit ml-5 mr-5  border-orange-500 hover:ring-4 ring-orange-500">
                        <a href="https://github.com/sami00712/currency_converter" target="blank">
                       <Image src={curency} alt="curency" width={250} height={100}/>
                       <h3 className="text-center bg-black text-orange-500">Currency Converter</h3>
                       </a>
                       </div>
                       </div>
                         <div>
                         <div className="flex mt-5 font-medium text-xl ">
                       <div className="border w-fit ml-5  border-orange-500 hover:ring-4 ring-orange-500">
                        <a href="https://github.com/sami00712/facebook_clone" target="blank">
                       <Image src={fbclone} alt="fbclone" width={250} height={100}/>
                       <h3 className="text-center bg-black text-orange-500">Facebook Clone</h3>
                       </a>
                       </div>
                       <div className="border w-fit ml-5  border-orange-500 hover:ring-4 ring-orange-500">
                        <a href="https://github.com/sami00712/adventure_game" target="blank">
                       <Image src={game} alt="game" width={250} height={100}/>
                       <h3 className="text-center bg-black text-orange-500">Adeventure Game</h3>
                       </a>
                       </div>
                       <div className="border w-fit ml-5  border-orange-500 hover:ring-4 ring-orange-500">
                        <a href="https://github.com/sami00712/milestone_1_static_resume" target="blank">
                       <Image src={resume} alt="resume" width={140} height={100}/>
                       <h3 className="text-center bg-black text-orange-500">Static Resume</h3>
                       </a>
                       </div>
                       <div className="border w-fit ml-5  border-orange-500 hover:ring-4 ring-orange-500">
                        <a href="https://github.com/sami00712/dynamic_resume" target="blank">
                       <Image src={builder} alt="resume-builder" width={135} height={100}/>
                       <h3 className="text-center bg-black text-orange-500 text-base">Resume Builder</h3>
                       </a>
                       </div>
                       <div className="border w-fit ml-5  border-orange-500 hover:ring-4 ring-orange-500">
                        <a href="https://github.com/sami00712/ATM-Machine" target="blank">
                       <Image src={atm} alt="atm" width={262} height={100}/>
                       <h3 className="text-center bg-black text-orange-500 text-base">ATM Machine</h3>
                       </a>
                       </div>
                      </div>  
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Pro