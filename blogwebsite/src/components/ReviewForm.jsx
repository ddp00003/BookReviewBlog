import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('review', review);
    formData.append('name', name);
    formData.append('rating', rating);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await fetch('http://localhost:8000/api/reviews/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const newReview = await response.json();
        onSubmit = newReview; // Pass the new review back to the parent component (Home)
        setReview(''); // Clear the form after submission
        setName('');
        setRating(0);
        setImage(null);
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error('Error adding review: ', error);
    }
  };

  return (
    <div className="review-form-container active">
      <form onSubmit={handleSubmit}>
        <div className="rating">
          {[...Array(5)].map((_, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= rating ? 'on' : 'off'}
                onClick={() => setRating(index)}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div>
        <textarea
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name of the book"
          required
          style={{ textAlign: 'left' }}
        ></textarea>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here..."
          required
          style={{ textAlign: 'left' }}
        ></textarea>
        {/*<input type="file" onChange={handleImageChange} />*/}
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
