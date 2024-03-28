import React, { useEffect,useState } from 'react';
import Banner from './Banner';
import BookBuffet from './BookBuffet';


const Home = () => {
    const[booklist,setBooklist]=useState([])



    useEffect(()=>{
        fetch("/fakeDataOfBooks.json")
        .then(res=>res.json())
        .then(data=>{
            setBooklist(data);
        })
    },[]);



    return (
        <div>
      <Banner></Banner>
     <div>
        <p className='text-5xl font-extrabold text-center mt-10'>Books</p>
     </div>
        
        <div className='lg:w-[80%] mx-auto grid lg:grid-cols-3 grid-cols-1 '>
            {
                booklist.map(item=><BookBuffet  books={item}></BookBuffet>)
            }



        </div>
      </div>
       
    );
};

export default Home;