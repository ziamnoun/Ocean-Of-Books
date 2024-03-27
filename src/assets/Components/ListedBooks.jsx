import React from 'react';
import Banner from './Banner';

const ListedBooks = () => {
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

            <div role="tablist" className="tabs tabs-lifted lg:w-[80%] m-auto">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    <div className="ReaList">
    <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-gray-300">
  <figure className='w-[30%] m-auto'><img src="public/Images/pngwing 1.png" alt="Album"/></figure>
  <div className="cardbody w-[50%] m-auto">
    <h2 className="card-title">The Catcher in the Rye</h2>
    <p>By : Awlad Hossain</p>

    <div className="tagPart flex gap-5">
    <p >Tag</p>
            <p className='border-2 border-green-50 bg-green-50 rounded-xl text-green-500 text-center font-bold text-xl'>#okk</p>
            <p className='border-2 border-green-50 bg-green-50 rounded-xl text-green-500 text-center font-bold text-xl'>#okk</p>
            <p>Year of Publishing:</p>

    </div>
<div className="pName flex gap-5 border-b-2 b-solid border-stone-200 p-3">
    <p>Publisher:Name</p>
    <p>Pages</p>
</div>
<div className="downPart flex gap-3">
<p className='border-2 border-green-50 bg-blue-400 rounded-xl text-blue-700 text-center font-bold text-xl px-1'>Category:</p>
<p className='border-2 border-green-50 bg-orange-200 rounded-xl text-orange-500 text-center font-bold text-xl px-1'>Rating</p>
<p className='border-2 border-green-50 bg-green-400 rounded-xl text-white text-center font-bold text-xl px-1'>Rating</p>

</div>

    
  </div>
</div>
    </div>
  
  
  
  
  
  </div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

  
</div>


  
        </div>
    );
};

export default ListedBooks;