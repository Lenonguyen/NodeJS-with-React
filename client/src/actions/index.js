import axios from 'axios';
import {FETCHUSER} from './types';

const fetchUser = () => {
     axios.get('/api/current_user');
}
