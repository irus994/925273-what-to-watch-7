import React, {useState} from 'react';
import {starsReview} from '../const.js';
import RatingStar from '../rating-star/rating-star.jsx';
import PropTypes from 'prop-types';
import {addComment} from '../../store/api-actions';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getFilms} from '../../store/films-data/selectors';
import {filmPropTypes} from '../films-prop-types';

const MIN_LENGTH = 10;
const MAX_LENGTH = 50;

function AddReviewForm(props) {
  const {onAddComment, films} = props;
  const {id} = useParams();
  const mainFilm = films.find((film) => film.id === Number(id));
  const [commentText, setCommentText] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [isFormBlocked, setIsFormBlocked] = useState(false);
  return (
    <form onSubmit={(evt) => evt.preventDefault} action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {
            starsReview.map((star) => (
              <RatingStar
                checked={userRating === star}
                onChange={({target}) => {
                  setUserRating(Number(target.value));
                }}
                key={star + 1}
                count={star}
              />
            ))
          }
        </div>
      </div>
      <div style={{backgroundColor: mainFilm.color}} className="add-review__text">
        <textarea
          required
          onChange={(evt) => {const {value} = evt.target; setCommentText(value);}}
          value={commentText}
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          style={{backgroundColor: 'white'}}
          minLength={MIN_LENGTH}
          maxLength={MAX_LENGTH}
        />
        <div className="add-review__submit">
          <button onClick={(evt) => {
            evt.preventDefault();
            if (evt.target.form.checkValidity()) {
              setIsFormBlocked(true);
              onAddComment(id, userRating, commentText)
                // eslint-disable-next-line no-alert
                .catch(() => alert('Ошибка, попробуйте позже'))
                .finally(() => setIsFormBlocked(false));
            } else {
              evt.target.form.reportValidity();
            }
          }} className="add-review__btn" type="submit" disabled={isFormBlocked}
          >Post
          </button>
        </div>
      </div>
    </form>
  );
}

AddReviewForm.propTypes = {
  onAddComment: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(filmPropTypes).isRequired,
};

const mapStateToProps = (state) => (
  {
    films: getFilms(state),
  }
);

const mapDispatchToProps = (dispatch) => ({
  onAddComment: (filmId, userRating, commentText) => dispatch(addComment(filmId, userRating, commentText)),
});

export {AddReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
