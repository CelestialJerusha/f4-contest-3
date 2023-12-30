import axios from 'axios'
import React, {useState,useEffect } from "react";
import './index.css'

const Home = () => {
  const [data,setData] = useState('');
  const [data1,setData1] = useState('');

  useEffect(()=>{
    fetchInfo()
},[])

  async function fetchInfo(){
    try{
      const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
      const response1 = await axios.get("https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes")
      console.log(response.data)
      console.log(response1.data)
      setData(response.data.items)
      setData1(response1.data.items)
    }
    catch(err){
      console.log(err);
    }
  }
  
  
    return(
      <div className='container'>
        {Array.from(data).map((dataObj) => {
          return (
              <div className='sub-container' key={dataObj.id}>
                <img src={dataObj.volumeInfo.imageLinks.thumbnail} alt="image1" />
              </div>
          );
        })}
        {Array.from(data1).map((dataObj) => {
          return (
              <div className='sub-container' key={dataObj.id}>
                <img src={dataObj.volumeInfo.imageLinks.thumbnail} alt="image1" />
              </div>
          );
        })}
      </div>
    )
      
  }

  export default Home;

