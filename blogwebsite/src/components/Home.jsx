import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm'; // Import the ReviewForm component
import './Home.css';

const Home = () => {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Fetch reviews from the backend when the component mounts
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/reviews/');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  // Handle adding a new review
  // const handleAddReview = (newReview) => {
  //   setReviews((prevReviews) => [...prevReviews, newReview]);
  //   setShowForm(false); // Close the form after adding the review
  // };

  // Handle deleting a review
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/reviews/${id}/`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setReviews(reviews.filter((review) => review.id !== id));
      } else {
        console.error('Error deleting review');
      }
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <div className="home-container">
      
      {/* {showForm && <ReviewForm onClose={() => setShowForm(false)} onSubmit={handleAddReview} />} Show the form conditionally */}
      <div className="reviews-container">
        {reviews.map((review) => (
          
          <div key={review.id} className="review">
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: i < review.rating ? "#ffc107" : "#e4e5e9" }} >
                  &#9733;
                </span>
              ))}
            </div>
            <p className='review_name'>{review.name}</p>
            <p>{review.review}</p>
            {console.log(review)}
            {/*review.image && <img src={`${review.image}`} alt="Review" className="review-image" />*/}
            <button onClick={() => handleDelete(review.id)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
