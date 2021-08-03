import axios from 'axios';

export const fetchBooksAPI = async()=>{
   return await axios.get("https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a");
}
    
export const fetchBookAPI = async(id)=>{
   console.log("id:",id.id);
   return await axios.get(`https://www.googleapis.com/books/v1/volumes/${id.id}`);
}
