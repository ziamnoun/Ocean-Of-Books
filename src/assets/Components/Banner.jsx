import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const Banner = () => {
    const navigate=useNavigate();

    return (
        <div>
          <div className="hero lg:w-[80%] bg-base-200 min-h-screen bg-no-repeat mx-auto  mt-10 rounded-3xl">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="/Images/pngwing_1-removebg-preview.png" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold"> Books to freshen up <br/>
        your bookshelf</h1>
       
        <Link to="/ListedBooks" className='btn bg-[#23BE0A] text-white mt-10 btn-xs sm:btn-sm md:btn-md lg:btn-lg'>View the list</Link>
            </div>
          </div>
        </div>
       

        </div>
    );
};

export default Banner;