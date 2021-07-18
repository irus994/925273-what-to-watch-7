export const getAssessment = (ratingNumber) => {
  if (ratingNumber < 3) {
    return 'Bad';
  }
  if ((ratingNumber >= 3) && (ratingNumber < 5)) {
    return 'Normal';
  }
  if ((ratingNumber >= 5) && (ratingNumber < 8)) {
    return 'Good';
  }
  if ((ratingNumber >= 8) && (ratingNumber < 10)) {
    return 'Very good';
  }
  if (ratingNumber === 10 ) {
    return 'Awesome';
  }
};

export const getHour = (allMinutes) => {
  if (allMinutes > 59) {
    const hour = (Math.floor(allMinutes / 60)).toString();
    const minutes = allMinutes - (hour * 60).toString();
    return `${hour}h ${minutes}m`;
  } else {
    return `${allMinutes}m`;
  }
};
