const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const router = express.Router();

//by default, you can't acces URLs that are different than your own (different origin points) - this is a security feature bulit into the web. However, you CAN use an intermediary to "break into" or get access to the other domains and do things like data retrieval, etc. - think of this as a virtual swipe card that allows access. http-proxy-middleware is the swipe card - it's configured to allow access to the end point and let you use the domian. The target in this case is our backend roku service (the database with all the users) - we can retrieve them and show them in our UI with the middlewate's access confirgured correctly.

router.use("/ums", createProxyMiddleware({
    target: 'http://localhost:5000',
    headers: {
        accept: "application/json, application/x-www-form-urlencoded"
    },
    changeOrigin: true
}))

router.get

module.exports = router;