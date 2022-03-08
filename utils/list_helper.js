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

const favoriteBlog = (blogs) => {
  if(blogs.length === 0)
    return 0;

  let mostLikes = 0;

  blogs.forEach(blog => {
    mostLikes = blog.likes > mostLikes ? blog.likes : mostLikes;
  });

  const blog = blogs.find(blog => blog.likes === mostLikes);
  const mostLikedBlog = {
    title: blog.title,
    author: blog.author,
    likes: blog.likes,
  };

  return mostLikedBlog;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
};