const {Router} = require('express');
const { postQuote } = require('../handlers/quoteHandler');
const quoteRouter = Router();

quoteRouter.post('/quoteRequest',postQuote);

module.exports = quoteRouter;