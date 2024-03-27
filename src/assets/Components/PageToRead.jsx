import React from 'react';
import { useEffect,useState } from 'react';
import Banner from './Banner';
import { useLoaderData } from "react-router-dom";
import { getBooks } from './utility/localStorage';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const PageToRead = () => {
    const[chartData,setChartData]=useState([])
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
                    
        setChartData(remainUniqueBook);
        }
        

    }
    
    ,[])

console.log(chartData)



    return (
        <div className='lg:w-[80%] m-auto mt-10'>
        
        <BarChart
            width={600}
            height={400}
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalPages" fill="#8884d8" shape={<CustomBarShape />} />
        </BarChart>
    </div>
    );
};

const CustomBarShape = (props) => {
    const { x, y, width, height, fill } = props;

    return (
        <g>
            <rect x={x} y={y} width={width} height={height} fill={fill} />
            
        </g>
    );
};




export default PageToRead;