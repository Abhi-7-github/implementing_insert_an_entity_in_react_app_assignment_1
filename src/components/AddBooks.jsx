import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import books from '../booksData'
import "./AddBooks.css";

const AddBooks = () => {

   
    const [title,setTitle]=useState("")
    const [author,setAuthor]=useState("")
    const [description,setDescription]=useState("")
    const [coverImage,setCoverImage]=useState("")


    const Submit=(e)=>{
        e.preventDefault()
        console.log(title,author,description,coverImage)
        let id=books.length+1;
        books.push({id,title,author,description,coverImage})
        setTitle("")
        setAuthor("")
        setDescription("")
        setCoverImage("")
        Nav("/")
    }



    const Nav=useNavigate();
  return (
    <div className='Form'>

        <form onSubmit={Submit}>
        <label>Title</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <label>Author</label>
        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} />
        <label>Description</label>
        <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
        <label>Image URL</label>
        <input type="text" value={coverImage} onChange={(e)=>setCoverImage(e.target.value)} />
        <button type='submit'>Submit</button>

        </form>
      
    </div>
  )
}

export default AddBooks