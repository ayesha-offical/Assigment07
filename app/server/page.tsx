type Data ={
    id: number,
    name: string,
    type: string,
    available:boolean
}

const serverpge =async () =>{
    const url =await fetch("https://simple-books-api.glitch.me/books/")
    const data: Data[] = await url.json()
    return (
        <main className="bg-gradient-to-r from-purple-200 to-pink-200 min-h-screen flex justify-center  ">
                    
        <div className="w-screen flex justify-center items-center  ">

          <div className="flex items-center justify-center">
          <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">

{data.map(book => (
  <div key={book.id} className="p-4 bg-slate-50 h-40 rounded-md shadow-md ">
    <h2 className="text-2xl font-medium">{book.name}</h2>
    <p className="text-xl  font-normal">{book.type}</p>
    <p className="font-normal ">{book.available? 'Available' : 'Not Available'}</p>
    <p className="text-right mt-[15px]  text-blue-800" > Read more...</p>
  </div>
))}

</div>
</div>
     
        </div>
        
    
          </main>
    )
}

export default serverpge