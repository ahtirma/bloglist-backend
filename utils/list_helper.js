const _ = require('lodash');

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

const mostBlogs = (blogs) => {
  if(blogs.length === 0) {
    return 0;
  }

  const authors = _.countBy(blogs, 'author');
  let maxBlogs = 0;
  let maxAuthor = '';

  for(const name in authors) {
    if(authors[name] > maxBlogs) {
      maxBlogs = authors[name];
      maxAuthor = name;
    }
  }
  return { author: maxAuthor, blogs: maxBlogs };
};

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return 0;
  }

  const blogsByAuthors = _.groupBy(blogs, 'author');
  let mostLikes = 0;
  let mostLikedAuthor = '';

  for(const name in blogsByAuthors) {
    const reducer = (previousValue, currentValue) => {
      return previousValue + currentValue.likes;
    };

    const sumOfLikes = blogsByAuthors[name].reduce(reducer, 0);

    if(sumOfLikes > mostLikes) {
      mostLikes = sumOfLikes;
      mostLikedAuthor = name;
    }
  }
  return { author: mostLikedAuthor, likes: mostLikes };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
};