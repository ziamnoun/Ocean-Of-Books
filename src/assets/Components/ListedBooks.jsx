import React, { useEffect,useState } from 'react';
import Banner from './Banner';
import { useLoaderData } from "react-router-dom";
import { getBooks } from './utility/localStorage';
import { wishgetBooks } from './utility/wishlistlocalStorage';

const ListedBooks = () => {
    const[opus,setOpus]=useState([])
    const[wishOpus,setWishOpus]=useState([])
   
    const getAllBooks=useLoaderData();
    console.log(getAllBooks)
    useEffect(()=>{
        const storedBookId=getBooks()

        if(getAllBooks.length > 0){
            // const remainUniqueBook=getAllBooks.filter(knowledge=>storedBookId.includes(knowledge.bookId))
            
            const remainUniqueBook=[];
            for(const bookId of storedBookId){
                const knowledge=getAllBooks.find(knowledge=>knowledge.bookId===bookId)
            if(knowledge){
                remainUniqueBook.push(knowledge);
            }
            
            }
                    
        setOpus(remainUniqueBook);
        }
        

    }
    
    ,[])


    useEffect(()=>{
        const wishstoredBookId=wishgetBooks()

        if(getAllBooks.length > 0){
            // const remainUniqueBook=getAllBooks.filter(knowledge=>storedBookId.includes(knowledge.bookId))
            
            const wishRemainUniqueBook=[];
            for(const bookId of wishstoredBookId){
                const wishknowledge=getAllBooks.find(wishKnowledge=>wishKnowledge.bookId===bookId)
            if(wishknowledge){
                wishRemainUniqueBook.push(wishknowledge);
            }
            
            }
                         setWishOpus(wishRemainUniqueBook);
        }
        

    }
    
    ,[])

    console.log(wishOpus)
    

console.log(opus)



    return (
        <div>
        <div className="h-20 bg-base-300 text-center align-middle lg:w-[80%] m-auto">
        <p className='text-xl font-bold text-center pt-5'>Books</p>
        </div>
        <div className="short w-[10%] m-auto ">
        <select className="select select-info w-full max-w-xs mt-10 bg-green-500 text-white font-bold">
        <option disabled selected>Short By</option>
        <option>English</option>
        <option>Japanese</option>
        <option>Italian</option>
        </select>
        </div>
 


        <div role="tablist" className="tabs tabs-lifted tabs-lg lg:w-[80%] m-auto">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  <div className="ReaList flex-row gap-5 mt-10">
    {
        opus.map(book=>(
            <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-gray-300">
            <figure className='w-[30%] m-auto py-10'><img src={book.image} alt="Album"/></figure>
            <div className="cardbody w-[50%] m-auto">
              <h2 className="card-title">{book.bookName}</h2>
              <p className='mt-2'><span className='font-bold'>By:</span> {book.author}</p>
          
              <div className="tagPart flex gap-5 mt-2">
              <p className='font-bold'>Tag</p>
                      <p className='border-2 border-green-50 bg-green-50 rounded-xl text-green-500 text-center font-bold text-xl'>#{book.tags[0]}</p>
                      <p className='border-2 border-green-50 bg-green-50 rounded-xl text-green-500 text-center font-bold text-xl'>#{book.tags[1]}</p>
                      <p><span className='font-bold'>Year of Publishing:</span> {book.yearOfPublishing}</p>
          
              </div>
          <div className="pName flex gap-5 border-b-2 b-solid border-stone-200 p-3">
              <p>Publisher:{book.publisher}</p>
              <p>Pages:{book.totalPages}</p>
          </div>
          <div className="downPart flex gap-3 mt-10">
          <p className='border-2 border-green-50 bg-blue-400 rounded-xl text-blue-700 text-center font-bold text-xl px-1'>Category:{book.category}</p>
          <p className='border-2 border-green-50 bg-orange-200 rounded-xl text-orange-500 text-center font-bold text-xl px-1'>Rating:{book.rating}</p>
          <p className='btn border-2 border-green-50 bg-green-400 rounded-xl text-white text-center font-bold text-xl px-1'>View details</p>
          
          </div>
          
              
            </div>
          </div>
        ))
    }
  
    </div>
  
  
  
  
  
  
  
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab tabs-lg" aria-label="Whishlist Books" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">


  {/* <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  </div> */}
  <div className="ReaList flex-row gap-5 mt-10">
    {
        wishOpus.map(book=>(
            <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-gray-300">
            <figure className='w-[30%] m-auto py-10'><img src={book.image} alt="Album"/></figure>
            <div className="cardbody w-[50%] m-auto">
              <h2 className="card-title">{book.bookName}</h2>
              <p className='mt-2'><span className='font-bold'>By:</span> {book.author}</p>
          
              <div className="tagPart flex gap-5 mt-2">
              <p className='font-bold'>Tag</p>
                      <p className='border-2 border-green-50 bg-green-50 rounded-xl text-green-500 text-center font-bold text-xl'>#{book.tags[0]}</p>
                      <p className='border-2 border-green-50 bg-green-50 rounded-xl text-green-500 text-center font-bold text-xl'>#{book.tags[1]}</p>
                      <p><span className='font-bold'>Year of Publishing:</span> {book.yearOfPublishing}</p>
          
              </div>
          <div className="pName flex gap-5 border-b-2 b-solid border-stone-200 p-3">
              <p>Publisher:{book.publisher}</p>
              <p>Pages:{book.totalPages}</p>
          </div>
          <div className="downPart flex gap-3 mt-10">
          <p className='border-2 border-green-50 bg-blue-400 rounded-xl text-blue-700 text-center font-bold text-xl px-1'>Category:{book.category}</p>
          <p className='border-2 border-green-50 bg-orange-200 rounded-xl text-orange-500 text-center font-bold text-xl px-1'>Rating:{book.rating}</p>
          <p className='btn border-2 border-green-50 bg-green-400 rounded-xl text-white text-center font-bold text-xl px-1'>View details</p>
          
          </div>
          
              
            </div>
          </div>
        ))
    }
  
    </div>
  
  
  
  
  
  
  
  
  
  </div>

  
</div>



     
    </div>
    );
};

export default ListedBooks;