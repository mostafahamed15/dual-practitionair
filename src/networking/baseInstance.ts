import axios from 'axios';
const instance = axios.create({
  baseURL:"https://dualpractice.devclan.io/api/",
  headers: {
    "Content-type": "application/json"
  }
});
export default instance