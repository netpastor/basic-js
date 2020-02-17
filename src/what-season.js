module.exports = function getSeason(input_date) {
  if (!input_date) {
    return 'Unable to determine the time of year!';
  }
  if ( Object.prototype.toString.call(input_date) != '[object Date]'){ throw Error; }

  const month = input_date.getMonth();

  const seasonRanges = {
    'winter': [11, 0, 1],
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10]
  };

  for (let key in seasonRanges) {
    if (seasonRanges[key].includes(month)) {
      return key
    }
  }
};
