const { posts, stories } = require('./database');


module.exports = () => {
  const data = {
    posts,
    stories,
  };

  data.teste = { valor: "Olá mundo"};

  return data;
}