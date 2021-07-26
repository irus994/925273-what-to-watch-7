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

export const gerHoursForPlayer = (allSeconds) => {
  const hour = (allSeconds / 60 / 60).toFixed(0);
  const minutes = ((allSeconds / 60) % 60).toFixed(0);
  const seconds = (allSeconds % 60).toFixed(0);
  if (allSeconds / 60 > 59) {
    return `-${hour}:${minutes}:${seconds}`;
  } else {
    return `-${minutes}:${seconds}`;
  }
};
