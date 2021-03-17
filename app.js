const express = require('express');

const app = express();
const ExpressError = require('./expressError');
const { checkNums, mean, median, mode } = require('./stats');

app.get('/mean', (req, res, next) => {
    try {
        checkNums(req.query.nums);
        return res.json({
            operation: "mean",
            value: mean(req.query.nums)
        })
    } catch (err) {
        return next(err);
    }
})

app.get('/median', (req, res, next) => {
    try {
        checkNums(req.query.nums);
        return res.json({
            operation: "median",
            value: median(req.query.nums)
        })
    } catch (err) {
        return next(err);
    }
})

app.get('/mode', (req, res, next) => {
    try {
        checkNums(req.query.nums);
        return res.json({
            operation: "mode",
            value: mode(req.query.nums)
        })
    } catch (err) {
        return next(err);
    }
})

// 404 handler
app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
  });
  
// generic error handler
app.use(function(err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;

  // set the status and alert the user
  return res.status(status).json({
    error: {message, status}
  });
});

app.listen(3000, () => {
    console.log('App on port 3000');
});