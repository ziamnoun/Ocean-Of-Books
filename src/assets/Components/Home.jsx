import React from 'react';
import Banner from './Banner';
import BookBuffet from './BookBuffet';


const Home = () => {
    return (
        <div>
      <Banner></Banner>
     <div>
        <p className='text-5xl font-extrabold text-center mt-10'>Books</p>
     </div>
        <BookBuffet></BookBuffet>
      </div>
       
    );
};

export default Home;