import axios from "axios";

const instance = axios.create({
    baseURL: 'http://5x4enq.natappfree.cc',
    timeout:10000,
    headers: {

        'Content-Type': 'multipart/form-data'
    
      }
});


  
  
export default instance
