import Link from 'next/link';

export default function Board(){
    return(
        <div className="w-full min-h-screen flex justify-center items-center bg-gray-900">
            <div>
                <div className="flex justify-center items-center pb-10">
                    <h1 className="font-mono font-bold text-4xl text-gray-100">Scrum Board</h1>
                </div>
                <div className="relative w-[380px] h-[480px] bg-gray-800 rounded-lg z-10 p-5 overflow-hidden">
                <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-lime-500 via-lime-500 
               to-transparent-top-[50%] -left-[50%] animate-spin-slow origin-bottom-right"></div>
                <div className="absolute w-[380px] h-[420px] bg-gradient-to-r from-lime-500 via-lime-500
               to-transparent-top-[50%] -left-[50%] animate-spin-delay origin-bottom-right"> </div>
                <div className="absolute inset-1 bg-gray-800 rounded-lg z-10 p-5"> 
                    <form>
                        <h2 className="text-2xl font-bold font-mono text-gray-100 text-center mt-3 mb-5">Sign up</h2>
                    <div className="relative flex flex-col mb-2">
                        <input type="text" 
                            id="name" 
                            placeholder="Enter your username"
                            className="relative z-10 border-0 border-b-2 border-lime-500 h-10 bg-transparent
                            text-gray-100 font-mono outline-none px-2 peer"
                        />
                        <i className="bg-lime-500 rounded w-full bottom-0 left-0 absolute h-10 -z-10 duration-500 origin-bottom
                        transform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]"
                        />
                        <label className="peer-focus:font-medium absolute text-base font-mono duration-500 transform 
                        -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-100
                        text-gray-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                        peer-placeholder-shown:text-gray-100 peer-focus:scale-75 peer-focus:-translate-y-8"></label>
                    </div>
                    <div className="relative flex flex-col mb-2 mt-8">
                        <input type="email" 
                            id="email" 
                            placeholder="Enter your email"
                            className="relative z-10 border-0 border-b-2 border-lime-500 h-10 bg-transparent
                          text-gray-100 font-mono outline-none px-2 peer"
                        />
                        <i className="bg-lime-500 rounded w-full bottom-0 left-0 absolute h-10 -z-10 duration-500 origin-bottom
                        transform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]"
                        />
                        <label className="peer-focus:font-medium absolute text-base font-mono duration-500 transform 
                        -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-100
                        text-gray-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                        peer-placeholder-shown:text-gray-100 peer-focus:scale-75 peer-focus:-translate-y-8"></label>
                    </div>
                    <div className="relative flex flex-col mb-2 mt-8">
                        <input type="password" 
                            id="password" 
                            placeholder="          Create a Password "
                            className="relative z-10 border-0 border-b-2 border-lime-500 h-10 bg-transparent text-gray-100
                          text-gray-100 font-mono outline-none px-2 peer"
                        />
                        <i className="bg-lime-500 rounded w-full bottom-0 left-0 absolute h-10 -z-10 duration-500 origin-bottom
                        transform peer-focus:h-10 peer-placeholder-shown:h-[0.5px]"
                        />
                        <label className="peer-focus:font-medium absolute text-base font-mono duration-500 transform 
                        -translate-y-8 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-100
                        text-gray-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                        peer-placeholder-shown:text-gray-100 peer-focus:scale-75 peer-focus:-translate-y-8"></label>
                    </div>
                    <p className="font-mono text-gray-100 text-xs">Must be at least 8 characters.</p>
                    

                    <button type="submit" 
                        className="py-3 mt-10 font-mono text-gray-100 bg-lime-500 w-full 
                        rounded hover:bg-lime-600 hover-scale-105 duration-300">Register</button>
                    
                    <h2 className="flex justify-center items-center mt-10 text-sm text-gray-100 font-mono">
                        Already have an account? 
                        <Link 
                        className="text-lime-500 pl-1" 
                        href="./login">Log in</Link>
                    </h2>
                    </form>
                    </div>
                </div>
            </div>
                
            
        </div>
    )
}