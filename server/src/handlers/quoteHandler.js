const {quoteRequest} = require('../controllers/quoteController');

const postQuote = async (req,res) => {
    const {height,width,type,description} = req.body;
    // console.log(req.body);
    // console.log(`Height: ${height}, Width: ${width}, Type: ${type}, Description: ${description}`);
    
    
    try {
         const quote = await quoteRequest(height,width,type,description);
        return res.status(200).json(quote);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = {postQuote};