import React from 'react';
import { useEffect,useState } from 'react';
import Banner from './Banner';
import { useLoaderData } from "react-router-dom";
import { getBooks } from './utility/localStorage';

const PageToRead = () => {
    const[chart,setChart]=useState([])
    const getAllBooks=useLoaderData();
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
                    
        setChart(remainUniqueBook);
        }
        

    }
    
    ,[])

console.log(chart)



    return (
        <div>
            page to read
        </div>
    );
};

export default PageToRead;