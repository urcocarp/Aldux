const {quoteRequest} = require('../controllers/quoteController');

const postQuote = async (req,res) => {
    const {nombre,telefono,correo,tipoCortina,ancho,alto,descripcion} = req.body;
    console.log(req.body);
    console.log(nombre,telefono,correo,tipoCortina,ancho,alto,descripcion);
    
    
    try {
         const quote = await quoteRequest(nombre,telefono,correo,tipoCortina,ancho,alto,descripcion);
         console.log(quote);
         
        return res.status(200).json(quote);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = {postQuote};