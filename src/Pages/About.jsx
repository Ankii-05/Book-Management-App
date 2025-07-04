import React from 'react';
import '../CSS/about.css';
const AboutUs = () => {
  return (
    <>
    <div className="about-container">
      <div className="left-container">
        <h3>MY BOOK APP</h3>
        <p>Welcome to  <strong id='head'>MY BOOK APP</strong> is an innovative book management application designed to help users effortlessly <strong id='head1'>organize, track and discover </strong> books in their personal collection. <br /> <br /> 
          Managing a vast collection of books can quickly become overwhelming, especially for avid readers and collectors. MyBook simplifies this process by providing an intuitive platform to categorize, track, and manage your library effortlessly. <br /> <br />
          Beyond simple organization, MyBook enhances your reading experience with insightful recommendations and progress tracking. Users can set reading goals, track borrowed books, and maintain wish lists to plan future reading adventures. Additionally, the application's interactive community features allow book lovers to share reviews, exchange recommendations, and stay updated on literary trends. With seamless cloud synchronization, you can access your collection anytime, anywhere.

        </p>
        </div>
      <div className="right-container">
        <img src="../../public/book-stack-png-16.png" alt="" />
        </div>
        
      </div>
      <div className="footer">
        <h3>---FEATURES---</h3>
        <div className="cards">
          <div className="card">
            <img src="../../public/Book-PNG-Image.png" alt="" />
            <h4>Smart Book Organization </h4>
            <p>Effortlessly categorize your book by genre, author, status, or custom tags, making your collection neatly organized and easy to navigate</p>
          </div>
          <div className="card">
            <img src="../../public/Book-PNG-Image.png" alt="" />
            <h4>Advance Search </h4>
            <p>Quickly locate any book using powerful search and filtering options, so you never struggle to find your next read.</p>
          </div>
          <div className="card">
            <img src="../../public/Book-PNG-Image.png" alt="" />
            <h4>Progress Tracking</h4>
            <p>Monitor your reading habits, set goals, and keep track of books you've completed, are currently reading, or plan to read.</p>
          </div>

        </div>
        <div className="cards">
          <div className="card">
            <img src="../../public/Book-PNG-Image.png" alt="" />
            <h4> Recommendations </h4>
            <p>Discover new books based on your reading preferences and interests, ensuring you always have fresh titles to explore</p>
          </div>
          <div className="card">
            <img src="../../public/Book-PNG-Image.png" alt="" />
            <h4>Borrow & Lending </h4>
            <p>Keep track of borrowed and lent books, complete with return reminders and borrower details, so you never lose a book again.</p>
          </div>
          <div className="card">
            <img src="../../public/Book-PNG-Image.png" alt="" />
            <h4>Review Sharing </h4>
            <p>Engage with fellow book lovers by sharing reviews, ratings, and recommendations, fostering a connected reading experinces</p>
          </div>

        </div>
        <p className='text'> &copy; All rights are reserved &hearts;</p>

      </div>

    </> 
  );
};

export default AboutUs;
