const withSass = require('@zeit/next-sass');
const nextRuntimeDotenv = require('next-runtime-dotenv');
const withPlugins = require('next-compose-plugins');

const withConfig = nextRuntimeDotenv({
  path: '.env',
  public: ['API_URL'],
});

module.exports = withConfig(withPlugins([withSass]));
