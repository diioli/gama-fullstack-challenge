import Axios from 'axios';

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws/{SEU_CEP}/json/'

});