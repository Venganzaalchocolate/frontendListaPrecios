const config = {
    development: {
      apiUrl: 'http://127.0.0.1:8000/api/',
    },
    production: {
      apiUrl: 'https://backendlistaprecios.onrender.com/api/',
    }
};
  
///En el caso de no tener process.env.NODE_ENV definido, utilizamos el entorno de desarrollo.
const env = process.env.NODE_ENV || 'development';
  
const apiUrl = config[env].apiUrl;

module.exports=apiUrl;