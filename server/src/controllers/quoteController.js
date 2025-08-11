const nodemailer = require('nodemailer');

const quoteRequest = async (height,width,type,description) => {
// console.log(`Requesting quote with Height: ${height}, Width: ${width}, Type: ${type}, Description: ${description}`);

    const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alduxcotizaciones2025@gmail.com',       
    pass: 'xbtk xczp lzwl waut'  
  }
}); 

  const mailOptions = {
    from: 'alduxcotizaciones2025@gmail.com',
    to: 'santiago@chaparro.com.ar',   // mail de la fábrica
    subject: 'Pedido de cotización de cortinas',
    text: `
      Solicito cotización para una cortina con las siguientes características:

      Altura: ${height} cm
      Ancho: ${width} cm
      Tipo de cortina: ${type}
      Descripción adicional: ${description}
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado: ' + info.response);
  } catch (error) {
    console.error('Error enviando correo:', error);
  }

};

module.exports = {quoteRequest}