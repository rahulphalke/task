const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require(' ');

const swaggerOptions = {
  swaggerDefinition:{
    info:{
      title:"EBSR API",
      version:"1.0.0",
      description: 'RestAPI for EBSR',
    }
  },
  apis:['app.js'],
}

module.exports = {
    swaggerJsDoc,
    swaggerUI,
    swaggerOptions
    
}