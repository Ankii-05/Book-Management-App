import React, { useState } from 'react'
import '../CSS/home.css'
import { toast, ToastContainer } from 'react-toastify';
const Favorite = () => {

    let storedData = JSON.parse(localStorage.getItem("fav-books")) || [];

    const [fav, setfav] = useState(storedData);

    // remove books
    function removeHandler(bookName) {
        const bookLeft = fav.filter((data) => data.name !== bookName)
        setfav(bookLeft)
        localStorage.setItem("fav-books", JSON.stringify(bookLeft));
        toast.success("Book Removed from Favorites");
    };

    return (
        <div>
            <ToastContainer position='top-center' autoClose="1500" />
            <h3>Favorite Books</h3>
            {
                fav.length === 0 ? (
                    <p>No Books available yet...</p>
                )
                    :
                    (
                        <div className="container-card">
                            {fav.map((data) => {
                                return (
                                    <div className="card-container" key={data.id}>
                                        <img src={data.image} alt={data.name} />
                                        <h2 className='title'>{data.name}</h2>
                                        <p className='author'>{data.author}</p>
                                        <p className='desc'>{data.description}</p>
                                        <div>
                                            <button onClick={() => removeHandler(data.name)}>remove</button>
                                            <button>update</button>
                                        </div>
                                    </div>
                                )
                            }
                            )
                            }
                            <div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}
export default Favorite;
