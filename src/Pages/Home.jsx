import React from "react";
// function Home() {
//     // let users = ["Ankit", "Abhii", "Vivek", "Supriya"];

//     // let userInfo = [
//     //     {
//     //         name: "Ankit",
//     //         age: 23,
//     //         id:1,
//     //     },
//     //     {
//     //         name: "Abhii",
//     //         age: 20,
//     //         id:2,
//     //     },
//     //     {
//     //         name: "Ankit",
//     //         age: 23,
//     //         id:3,
//     //     },
//     //     {
//     //         name: "Vivek",
//     //         age: 22,
//     //         id:4,
//     //     },
//     //     {
//     //         name: "Supriya",
//     //         age: 20,
//     //         id: 5,
//     //     },
//     // ]
//     return (
//         // <ul>
//         //     {
//         //         users.map((data, index) => {
//         //             return(
//         //             <li key={index} >{data}</li>
//         //         )})
//         //     }
//         // </ul>



//         // <div>
//         //     {userInfo.map((data) => {
//         //         return (
//         //             <div key={data.id} style={{border: "1px solid black", margin: "10px", padding: "10px"} }>
//         //                 <p>My Name is: {data.name} and I am {data.age} years old.</p>
//         //             </div>
//         //         )
//         //     })}
//         // </div>



//     );
// }

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import '.././/CSS/home.css';
const Home = () => {
    
    // create a state variable to store the books
    let favBook = JSON.parse(localStorage.getItem("fav-books")) || [];


    let storedBooks = JSON.parse(localStorage.getItem("book-data")) || [];

    // set the state of the books
    const [book, setBooks] = useState(storedBooks);

    // remove books
    function removeHandler(bookName) {
        const bookLeft = book.filter((data) => data.name !== bookName)
        setBooks(bookLeft)
        localStorage.setItem("book-data", JSON.stringify(bookLeft));
    };

    // Add Favorite books
    const favHandler = (book) => {

        // check if the book is already in the favorites
        const isAlreadyFav = favBook.find((b) => b.name === book.name);

        if (isAlreadyFav) {
            toast.warning("Already in Favorites")
            return;
        }
            const updateFavBook = [...favBook, book];
            localStorage.setItem("fav-books",
                JSON.stringify(updateFavBook));
            toast.success("Book added to Fav")
    }
    return (
        <div>
            <h3>Book Collections</h3>
            {
                book.length === 0 ? (
                    <p>No books available yet...</p>)
                    :
                    (
                        <div  className="container-card"
                            
                        >
                            {book.map((data) => {
                                return <div className="card-container"
                                    key={data.id}>
                                    <img
                                        src={data.image}
                                        alt={data.name}
                                    />
                                    <h2 className="title">
                                        {data.name}
                                    </h2>
                                    <p className="author">
                                        {data.author}
                                    </p>
                                    <p className="desc">
                                        {data.description}
                                    </p>
                                    <div className="btn-container">
                                        <button >Update</button>
                                        <button onClick={() => removeHandler(data.name)} >Remove</button>
                                        <button onClick={() => favHandler(data)} className="like"> <FontAwesomeIcon className="icon" icon={faHeart}/> </button>
                                    </div>
                                </div>
                            })}
                        </div>
                    )
            }
            <ToastContainer position="top-center" theme="light" autoClose="1500" />
        </div >
    );
}

export default Home;