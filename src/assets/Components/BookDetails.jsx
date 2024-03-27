import { useLoaderData,useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storeBook } from "./utility/localStorage";
import { useState } from "react";
import { wishstoreBook } from "./utility/wishlistlocalStorage";





const BookDetails = () => {
    const allBook=useLoaderData();
   
    
    const {id}=useParams();
    const idInt=parseInt(id);
    const singleBookData=allBook.find(data=>data.bookId===idInt);
 
    console.log(singleBookData);
    const [isRead,setIsRead]=useState(false)

    const handleButton=()=>{
      storeBook(idInt)
      setIsRead(true)
      


      toast.success("Add to Read Books.");
     



    }


    const handlleWishButton=()=>{
      if(isRead){
        toast.error("Already read")
      }
      else{
        wishstoreBook(idInt)
        toast.success("Add to wishlist")
      }


    }



   


    return (
        
        <div className="card lg:w-[80%] mx-auto mt-10 lg:card-side bg-base-100 shadow-xl">
        <figure className='bg-stone-200 lg:w-[50%] '><img src={singleBookData.image} alt="Album"/></figure>
        <div className="cardBody ml-5">
          <h2 className="card-title text-3xl font-extrabold"> {singleBookData.bookName}</h2>
          <p className='text-xl font-bold border-b-2 border-b-stone-200 border-solid py-2'> By : {singleBookData.author}</p>
          <p className='text-xl  border-b-2 border-b-stone-200 border-solid py-2'>{singleBookData.category}</p>
          <p className='mt-5'>Review: {singleBookData.review} </p>
          <div className="py-5 tags text-lg font-bold flex gap-5 border-b-2 border-b-stone-200 border-solid">
            <p >Tag</p>
            <p className='border-2 border-green-50 bg-green-50 rounded-xl text-green-500 text-center font-bold text-xl'>#{singleBookData.tags[0]}</p>
            <p className='border-2 border-green-50 bg-green-50 rounded-xl text-green-500 text-center font-bold text-xl'>#{singleBookData.tags[1]}</p>
          </div>
          <div className="table">
          <div className="overflow-x-auto">
  <table className="table border-none">
    {/* head */}
    {/* <thead>
      <tr>
        <th>Number of Pages:</th>
        <th>100</th>
       
      </tr>
    </thead> */}
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>Number of Pages:</td>
        <td>{singleBookData.totalPages}</td>
      </tr>
      {/* row 2 */}
      <tr>
        
        <td>Publisher:</td>
        <td>{singleBookData.publisher}</td>
      </tr>
      <tr>
      
        <td> Year of Publishing:</td>
        <td>{singleBookData.yearOfPublishing}</td>
      </tr>
      {/* row 3 */}
      <tr>
       
        <td>Rating:</td>
        <td>{singleBookData.rating}</td>
      </tr>
    </tbody>
  </table>
</div>
          </div>

          <div className="card-actions flex gap-5 mt-5">
          <button onClick={handleButton}  class="btn btn-outline font-bold">Read</button>
          <button onClick={handlleWishButton}  class="btn btn-active btn-accent text-white font-bold">Wish list</button>
          <ToastContainer />
          </div>
        </div>
      </div>
      
    );
};

export default BookDetails;











