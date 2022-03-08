const dummy = (blogs) => {
  return blogs ? 1 : 1;
};

const totalLikes = (blogs) => {
  const reducer = (previousValue, currentValue) => {
    return previousValue + currentValue.likes;
  };

  return blogs.length === 0
    ? 0
    : blogs.reduce(reducer, 0);
};

module.exports = {
  dummy,
  totalLikes
};