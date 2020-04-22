const { environment } = require('@rails/webpacker');

const graphqlLoader = {
  test: /\.(graphql|gql)$/,
  exclude: /node_modules/,
  loader: 'graphql-tag/loader'
};

// Insert json loader at the end of list
environment.loaders.append('graphql', graphqlLoader);

const fileLoader = environment.loaders.get('file')
fileLoader.test = /\.(jpg|jpeg|png|gif|tiff|ico|svg|eot|otf|ttf|woff|woff2|webm|mp4)$/i


module.exports = environment;
