import axios from 'axios';
export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization:
      'bearer 5f51cf2fb3abfb42416caa7547c5ab6f0fbb6b6345fdf48d355d4c57b065b05ac5ccc105b2817a7ada4a19f26af7e1cb417b6bb5bb97ad817acdc55f1d3560ea54fb0e0336316a6219e9b2ca995b7e9ee96e59d8d3c9598e306df81646b03f0da21e1a8a56fdd492e739f3a308d9f6dc1ec3973cefd870e75c45c0ee7a623469',
  },
});
