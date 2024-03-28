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
const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); 
    return randomColor;}






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
            <Bar dataKey="totalPages"  key={`bar-${chartData.bookId}`} fill={generateRandomColor()} shape={<TriangleBar />} label={{ position: 'top' }} />
        </BarChart>
    </div>
);
};

const getPath = (x, y, width, height) => {
return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
${x + width / 2}, ${y}
C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
Z`;
};

const TriangleBar = (props) => {
const { fill, x, y, width, height } = props;
return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};








export default PageToRead;