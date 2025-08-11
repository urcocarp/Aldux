const {Router} = require('express');

const quoteRouter = require('../routes/quoteRouter');

const router = Router();

router.use('/quote',quoteRouter);
module.exports = router;