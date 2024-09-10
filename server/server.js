const { posts, storiesFollowers, storiesDiscovery } = require('./database');


module.exports = () => {
  const data = {
    posts,
  };

  data.discovery = storiesDiscovery;
  data.followers = storiesFollowers;

  return data;
}