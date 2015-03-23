// Set environment variables to configure the application.

module.exports = {

  email: process.env.ANALYTICS_REPORT_EMAIL,
  key: process.env.ANALYTICS_KEY_PATH,

  debug: (process.env.ANALYTICS_DEBUG ? true : false),

  proxy: process.env.ANALYTICS_PROXY,

  /*
    AWS S3 information.

    Separately, you need to set AWS_REGION, AWS_ACCESS_KEY_ID, and
    AWS_SECRET_ACCESS_KEY. The AWS SDK for Node reads these in automatically.
  */
  aws: {
    // No trailing slashes
    bucket: process.env.AWS_BUCKET,
    path: process.env.AWS_BUCKET_PATH,
    // HTTP cache time in seconds. Defaults to 0.
    cache: process.env.AWS_CACHE_TIME
  },

  account: {
    ids: process.env.ANALYTICS_REPORT_IDS
  },

  mongo: {
    host: process.env.MONGO_HOST,
    database: process.env.MONGO_DATABASE
  }


};
