import React, {useState} from 'react';
import {starsReview} from '../const.js';
import RatingStar from '../rating-star/rating-star.jsx';

export default function AddReviewForm() {
  const [commentText, setCommentText] = useState('');
  return (
    <form onSubmit={(evt) => evt.preventDefault} action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {
            starsReview.map((star) => (
              <RatingStar
                key={star + 1}
                count={star}
              />
            ))
          }
        </div>
      </div>
      <div className="add-review__text">
        <textarea onChange={(evt) => {const {value} = evt.target; setCommentText(value);}} value={commentText} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}
