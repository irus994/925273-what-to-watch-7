import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import TabsOverview from './tabs-overview.jsx';
import TabsDetails from './tabs-details.jsx';
import TabsReviews from './tabs-reviews.jsx';
import {tabs} from '../const';
import PropTypes from 'prop-types';

export default function Tabs(props) {
  const {film, comments} = props;
  const [activeTab, setActiveTab] = useState(tabs.OVERVIEW);
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li onClick={() => setActiveTab(tabs.OVERVIEW)} className={`${activeTab === tabs.OVERVIEW ? 'film-nav__item  film-nav__item--active' : 'film-nav__item'}`}>
            <Link to="#" className="film-nav__link">Overview</Link>
          </li>
          <li onClick={() => setActiveTab(tabs.DETAILS)} className={`${activeTab === tabs.DETAILS ? 'film-nav__item  film-nav__item--active' : 'film-nav__item'}`}>
            <Link to="#" className="film-nav__link">Details</Link>
          </li>
          <li onClick={() => setActiveTab(tabs.REVIEWS)} className={`${activeTab === tabs.REVIEWS ? 'film-nav__item  film-nav__item--active' : 'film-nav__item'}`}>
            <Link to="#" className="film-nav__link">Reviews</Link>
          </li>
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
        comments.map((comment) => (
          <TabsReviews
            reviewRating={comment.rating}
            reviewText={comment.comment}
            userName={comment.user.name}
            commentDate={comment.date}
            key={comment.id}
          />))
      )}
    </div>
  );
}

Tabs.propTypes = {
  film: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
};
