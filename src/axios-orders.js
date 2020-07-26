import axios from 'axios';


const instance=axios.create({
    baseURL: 'https://react-my-burger-e9ac6.firebaseio.com/'
});

export default instance;