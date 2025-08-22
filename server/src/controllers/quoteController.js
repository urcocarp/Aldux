const nodemailer = require('nodemailer');
const path = require('path');

const quoteRequest = async (nombre,telefono,correo,tipoCortina,ancho,alto,descripcion) => {
console.log('desde controller',nombre,telefono,correo,tipoCortina,ancho,alto,descripcion);


    const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alduxcotizaciones2025@gmail.com',       
    pass: 'xbtk xczp lzwl waut'  
  },
  
}); 

  const mailOptions = {
    from: 'alduxcotizaciones2025@gmail.com',
    to: 'urcocarp1986.nr@gmail.com',   
    
    subject: 'Solicitud de cotización',
       html: `
     <!DOCTYPE html>
<html lang="es">git s
<head>
  <meta charset="UTF-8">
  <title>Cotización Ecommerce</title>
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      background-color: #f4f6f8;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 650px;
      margin: 30px auto;
      background: #ffffff;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .header {
      background: #FB6333
      color: white;
      padding: 20px;
      text-align: center;
    }
    .header img {
      max-width: 120px;
      margin-bottom: 10px;
    }
    .content {
      padding: 20px;
      color: #000000;
    }
    .content h2 {
      color: #2C2C2C;
    }
    .quote-box {
      background: #f8f9fa;
      border-left: 5px solid #FB6333;
      padding: 15px;
      margin: 20px 0;
      border-radius: 6px;
    }
    .cta {
      text-align: center;
      margin-top: 25px;
    }
    .cta a {
      background: #FB6333;
      color: white;
      padding: 12px 25px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
      transition: 0.3s;
    }
    .cta a:hover {
      background: #FB6333;
    }
    .footer {
      background: #f1f1f1;
      text-align: center;
      padding: 15px;
      font-size: 13px;
      color: #555;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <!-- Aquí va el logo -->
       <img src="cid:logo-aldux" alt="Logo Empresa" />
      <h1>Solicitud de Cotización</h1>
    </div>
    <div class="content">
      <h2>El cliente ${nombre} necesita cotizar el siguiente producto: </h2>
     
      
      <div class="quote-box">
        <p><strong>Tipo de cortina</strong> :${tipoCortina}</p>
        <p><strong>Medidas</strong>: ${alto}(alto) x ${ancho}(ancho)</p>
        <p><strong>Detalles</strong>: ${descripcion}</p>
        <p><strong>Teléfono</strong>: ${telefono}</p>
        <p><strong>Correo</strong>: ${correo}</p>
      </div>
      
      
      
    
    </div>
    <div class="footer">
      © 2025 ALDUX. Todos los derechos reservados.<br>
      <small>Este mensaje es confidencial y destinado solo al receptor.</small>
    </div>
  </div>
</body>
</html>

    `,
        attachments: [
      {
        filename: 'logo-aldux.svg',
        path: path.join(__dirname, '../assets/img/logo-aldux.svg'),
        cid: 'logo-aldux' // El mismo cid que pusiste en el src del img
      }
    ]
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    if(info){
      return { message: 'Mensaje enviado exitosamente!!', info };
    }
    console.log('Correo enviado: ' + info.response);
  } catch (error) {
    console.error('Error enviando correo:', error);
  }

};

module.exports = {quoteRequest}