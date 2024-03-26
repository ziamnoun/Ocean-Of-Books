import React from 'react';


const BookBuffet = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-10 border-2 border-gray-300 ">
  <div className="bg-gray-100 m-5 rounded-lg"><figure><img src="public/Images/pngwing 1.png" alt="Books" /></figure></div>
  <div className="card-body">
    <div className="categoryBooks flex gap-2">
        <p className='border-2 border-green-50 bg-green-50 rounded-xl text-green-500 text-center font-bold text-xl'>Young</p>
        <p className='border-2 border-green-50 bg-green-50 rounded-xl text-green-500 text-center font-bold text-x'>Adult</p>
    </div>
    <h2 className="card-title text-3xl font-bold">
    The Catcher in the Rye

      
    </h2>
    <p className='font-semibold text-lg border-b-2 border-b-stone-200 border-dashed'>By : Awlad Hossain</p>
    
    <div className="card-actions justify-between">
        <p>Fiction</p>
      <div>
        <p>5.0  </p>
      </div>
    </div>
  </div>
</div>
    );
};

export default BookBuffet;