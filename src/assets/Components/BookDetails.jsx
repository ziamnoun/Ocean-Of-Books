import React from 'react';

const BookDetails = () => {
    return (
        <div className="card lg:w-[80%] mx-auto mt-10 lg:card-side bg-base-100 shadow-xl">
        <figure className='bg-stone-200 lg:w-[50%] '><img src="public/Images/pngwing 1.png" alt="Album"/></figure>
        <div className="cardBody">
          <h2 className="card-title text-3xl font-extrabold"> The Catcher in the Rye</h2>
          <p className='text-xl font-bold border-b-2 border-b-stone-200 border-solid'> By : Awlad Hossain</p>
          <p>Fiction</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;