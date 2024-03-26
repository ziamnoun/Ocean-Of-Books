import React from 'react';

const BookDetails = () => {
    return (
        <div className="card lg:w-[80%] mx-auto mt-10 lg:card-side bg-base-100 shadow-xl">
        <figure className='bg-stone-200 lg:w-[50%] '><img src="public/Images/pngwing 1.png" alt="Album"/></figure>
        <div className="cardBody ml-5">
          <h2 className="card-title text-3xl font-extrabold"> The Catcher in the Rye</h2>
          <p className='text-xl font-bold border-b-2 border-b-stone-200 border-solid py-2'> By : Awlad Hossain</p>
          <p className='text-xl  border-b-2 border-b-stone-200 border-solid py-2'>Fiction</p>
          <p className='mt-5'>Review : </p>
          <div className="py-5 tags text-lg font-bold flex gap-5 border-b-2 border-b-stone-200 border-solid">
            <p >Tag</p>
            <p className='border-2 border-green-50 bg-green-50 rounded-xl text-green-500 text-center font-bold text-xl'>#ok</p>
            <p className='border-2 border-green-50 bg-green-50 rounded-xl text-green-500 text-center font-bold text-xl'>#ok</p>
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
        <td>100</td>
      </tr>
      {/* row 2 */}
      <tr>
        
        <td>Publisher:</td>
        <td>Blue jon</td>
      </tr>
      <tr>
      
        <td> Year of Publishing:</td>
        <td>1980</td>
      </tr>
      {/* row 3 */}
      <tr>
       
        <td>Rating:</td>
        <td>5</td>
      </tr>
    </tbody>
  </table>
</div>
          </div>

          <div className="card-actions flex gap-5 mt-5">
          <button class="btn btn-outline font-bold">Read</button>
          <button class="btn btn-active btn-accent text-white font-bold">Wish list</button>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;