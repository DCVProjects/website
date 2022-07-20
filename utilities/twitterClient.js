const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_SECRET,
})

const roClient = client.readOnly
module.exports = roClient;