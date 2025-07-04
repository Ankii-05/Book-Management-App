import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
const MyBookApp = () => {
    
    const [book, setBooks] = useState({
        image: "",
        name: "",
        author: "",
        description: "",
    });
    
    const submitHandler = (event) => {
        event.preventDefault();
        if (!book.image || !book.name || !book.author || !book.description) { 
            toast.error("Please fill all the fields");
            return;
        }

        const newBook = { ...book, id: Date.now() };
        const bookExisted = JSON.parse(localStorage.getItem("book-data")) || [];
        bookExisted.push(newBook);

        localStorage.setItem('book-data', JSON.stringify(bookExisted));

        toast.success("Book added successfully");

        setBooks({
            image: "",
            name: "",
            author: "",
            description: "",
        })
    }
    const changeHandler = (event) => {
        let { name, value } = event.target;
        setBooks({
            ...book,
            [name]: value,
        })
    }

    const changeImageHandler = (event) => {
        const file = event.target.files[0];
        if (file) {
            const readFile = new FileReader();
            readFile.onloadend = () => {
                    setBooks((prev) => ({
                    ...prev,
                    image: readFile.result,
                }))
            }
            readFile.readAsDataURL(file);
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler} className='login-form'>
                <h5 className='out'>Add Book</h5>
                
                <label htmlFor="name">Book Name </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={book.name}
                    onChange={changeHandler}
                    placeholder='Enter book name'
                />
                
                <label  htmlFor="author">Author</label>
                <input
                    type="text"
                    id="author"
                    name='author'
                    value={book.author}
                    onChange={changeHandler}
                    placeholder='Enter author name'
                />
                
                    <label htmlFor="desc">Description</label>
                <input
                    type="text"
                    name="description"
                    placeholder='description....'
                    id="desc"
                    value={book.description}
                    onChange={changeHandler}
                />
                
                    <label htmlFor="file">Choose an Book image</label>
                <input
                    type="file"
                    accept='image/*'
                    name='image'
                    onChange={changeImageHandler}
                    id='file'
                />
                
                <button type='submit' className='button'>Add Book</button>
            </form>
            <ToastContainer position='top-center' autoClose={1500} theme='dark' />
        </div>
    )
}
export default MyBookApp