import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import TabsOverview from './tabs-overview.jsx';
import TabsDetails from './tabs-details.jsx';
import TabsReviews from './tabs-reviews.jsx';
import {tabs} from '../const';
import PropTypes from 'prop-types';

export default function Tabs(props) {
  const {film, comments} = props;
  const commentsLeft = comments.filter((_, index) => ((index + 1) % 2) === 1);
  const commentsRight = comments.filter((_, index) => ((index + 1) % 2) === 0);
  const [activeTab, setActiveTab] = useState(tabs.OVERVIEW);
  const pageTabs = [
    {text: 'Overview', data: 'OVERVIEW'},
    {text: 'Details', data: 'DETAILS'},
    {text: 'Reviews', data: 'REVIEWS'},
  ];
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            pageTabs.map((pageTab) => (
              <li key={pageTab.text} onClick={() => setActiveTab(pageTab.data)} className={`${activeTab === pageTab.data ? 'film-nav__item  film-nav__item--active' : 'film-nav__item'}`}>
                <Link to="#" className="film-nav__link">{pageTab.text}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
      {activeTab === tabs.OVERVIEW && (
        <TabsOverview
          description={film.description}
          director={film.director}
          starring={film.starring.join(', ')}
          rating={film.rating}
          scoresCount={film.scoresCount}
        />
      )}
      {activeTab === tabs.DETAILS && (
        <TabsDetails
          filmReleased={film.year}
          director={film.director}
          starring={film.starring.join(', ')}
          runTime={film.runTime}
          genre={film.genre}
        />
      )}
      {activeTab === tabs.REVIEWS && (
        <div className="film-card__reviews film-card__row">
          <div className="film-card__reviews-col">
            {commentsLeft.map((comment) => (
              <TabsReviews
                reviewRating={comment.rating}
                reviewText={comment.comment}
                userName={comment.user.name}
                commentDate={comment.date}
                key={comment.id}
              />))}
          </div>
          <div className="film-card__reviews-col">
            {commentsRight.map((comment) => (
              <TabsReviews
                reviewRating={comment.rating}
                reviewText={comment.comment}
                userName={comment.user.name}
                commentDate={comment.date}
                key={comment.id}
              />))}
          </div>
        </div>
      )}
    </div>
  );
}

Tabs.propTypes = {
  film: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
};
