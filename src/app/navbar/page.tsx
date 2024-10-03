import Image from "next/image"
import logo from "/public/logo.png"
import Link from "next/link"
function Bar(){
    return(
        <main className="text-white">
        <div>
           {/* <Image src = {logo} alt="pic" width={100} height={100}/> */}
           <Image src={logo} alt="d" width={100} height={100} className="animate-bounce"/>
        </div>
        <div className="ml-96 border-1 font-serif font-medium">
           <nav className="ml-20 rounded-lg  mx-2 bg-blue-400 w-fit hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  hover:text-rose-500">
            
                
                   <button className="mx-5 text-sm font-bold hover:text-yellow-500 "><Link href= "/">HOME</Link></button> 
                 
                
                   <button className="mx-5 text-sm font-bold  hover:text-yellow-500"> <Link href= "/about">ABOUT</Link></button> 
                
                
                   <button className="mx-5 text-sm font-bold hover:text-yellow-500"> <Link href= "/project">MY PROJECT</Link></button> 
                
                
                   <button className="mx-5 text-sm font-bold  hover:text-yellow-500"> <Link href= "/contact">CONTACT</Link></button> 
                
          
           </nav>
        </div>
        </main>
    )
}

export default Bar