import { useState,useEffect } from "react";
import yelp from "../Api/yelp";



export default  () => {
const [result,setResults]=useState([])
  const [errorMessage,seterrorMessage]=useState('');

  const searchApi= async searchTerm=>{
    try{ 
        const response=await yelp.get('/search', {
      params:{
        limit:50,
        term:searchTerm,
        location:' san jose'
      }
    });
    setResults(response.data.businesses)
  } catch (err){
    seterrorMessage('Something went wrong');
    
    }
  };
  useEffect(()=>{
     searchApi('pasta')
  },[])
  
  return [result,errorMessage,searchApi]
}

 