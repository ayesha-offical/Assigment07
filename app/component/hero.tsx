

export const Hero = () => {
  return (
    <main className="flex items-center justify-center text-center h-screen  w-screen">
    <div className="rounded-md  flex gap-4 flex-col w-96  h-48 items-center justify-center bg-gradient-to-r from-purple-500 to-pink-300 ">

     <h1 className="text-white font-bold text-xl">
        API Fetching
     </h1>
     <p className=" font-normal text-white">
        Fetching data from an API and displaying it .
     </p>
     <div className="flex gap-3 items-center justify-center text-center">
     <a href="./client"className=" rounded-md text-white bg-gradient-to-r from-purple-800 to-pink-500 w-32 h-10 hover:text-black p-2">
       Client side
     </a>
     <a href="./server" className="rounded-md text-white bg-gradient-to-r from-purple-800 to-pink-500  w-32 h-10 hover:text-black  p-2">
      Server side
     </a>
     </div>
    </div>
    </main>
  )
}
