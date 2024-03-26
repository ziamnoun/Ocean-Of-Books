import React from 'react';


const BookBuffet = ({books}) => {

    console.log(books);

    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-10 border-2 border-gray-300 ">
  <div className="bg-gray-100 m-5 rounded-lg"><figure><img src={books.image} alt="Books" /></figure></div>
  <div className="card-body">
    <div className="categoryBooks flex gap-2">
        <p className='border-2 border-green-50 bg-green-50 rounded-xl text-green-500 text-center font-bold text-xl'>{books.tags[0]}</p>
        <p className='border-2 border-green-50 bg-green-50 rounded-xl text-green-500 text-center font-bold text-x'>{books.tags[1]}</p>
    </div>
    <h2 className="card-title text-3xl font-bold">
    {books.bookName}
    </h2>
    <p className='font-semibold text-lg border-b-2 border-b-stone-200 border-dashed'>{books.author}</p>
    
    <div className="card-actions justify-between">
        <p>{books.category}</p>
      <div>
        <p>{books.rating} </p>
      </div>
    </div>
  </div>
</div>
    );
};

export default BookBuffet;