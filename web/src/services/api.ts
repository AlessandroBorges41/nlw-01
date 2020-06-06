import axios from 'axios';

/*
    O Axios nos permite definir uma instância base na qual podemos definir uma URL 
    e quaisquer outros elementos de configuração. 
*/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
 /* const api = axios.create({
     baseURL: `http://localhost:3333/`
 }); */

  export default axios.create({
     baseURL: `http://localhost:3333/`
  }); 

//export default axios;