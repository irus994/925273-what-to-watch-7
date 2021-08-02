import React, {useState} from 'react';
import {starsReview} from '../const.js';
import RatingStar from '../rating-star/rating-star.jsx';
import PropTypes from 'prop-types';
import {addComment} from '../../store/api-actions';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getFilms} from '../../store/films-data/selectors';
import {filmPropTypes} from '../films-prop-types';

const MIN_LENGTH = 50;
const MAX_LENGTH = 400;

const isCommentTextValid = (text) => text.length <= MAX_LENGTH && text.length >= MIN_LENGTH;

function AddReviewForm(props) {
  const {onAddComment, films} = props;
  const {id} = useParams();
  const mainFilm = films.find((film) => film.id === Number(id));
  const [commentText, setCommentText] = useState('');
  const [userRating, setUserRating] = useState();
  const [isFormBlocked, setIsFormBlocked] = useState(false);
  const [isButtonBlocked, setIsButtonBlocked] = useState(true);
  return (
    <form onSubmit={(evt) => {
      evt.preventDefault();
      setIsFormBlocked(true);
      onAddComment(id, userRating, commentText)
        .catch(() => {
          setIsFormBlocked(false);
          // eslint-disable-next-line no-alert
          alert('Ошибка, попробуйте позже');
        });
    }} action="#" className="add-review__form"
    >
      <div className="rating">
        <div className="rating__stars">
          {
            starsReview.map((star) => (
              <RatingStar
                checked={userRating === star}
                onChange={({target}) => {
                  setUserRating(Number(target.value));
                  if (target.form.checkValidity()) {
                    setIsButtonBlocked(false);
                  } else {
                    setIsButtonBlocked(true);
                  }
                }}
                key={star + 1}
                count={star}
                disabled={isFormBlocked}
              />
            ))
          }
        </div>
      </div>
      <div style={{backgroundColor: mainFilm.color}} className="add-review__text">
        <textarea
          required
          onChange={(evt) => {
            const {value} = evt.target;
            setCommentText(value);
            if (!isCommentTextValid(value)) {
              evt.target.setCustomValidity(`Введите текст от ${MIN_LENGTH} до ${MAX_LENGTH} символов`);
            } else {
              evt.target.setCustomValidity('');
            }
            evt.target.reportValidity();
            if (evt.target.form.checkValidity()) {
              setIsButtonBlocked(false);
            } else {
              setIsButtonBlocked(true);
            }
          }}
          value={commentText}
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          style={{backgroundColor: 'white'}}
          disabled={isFormBlocked}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isFormBlocked || isButtonBlocked}>Post</button>
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
