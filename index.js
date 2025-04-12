const express = require('express');
const axios = require('axios');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
})
async function getProducts() {
    const API_DOMAIN = 'https://fakestoreapi.com/';
    const response = axios.get(API_DOMAIN + 'products')
    return (await response).data;
}
app.get('/products', async(req, res) => {
    const products = await getProducts();
    res.send(products);
})
async function getProductsid(id) {
    const API_DOMAIN = 'https://fakestoreapi.com/';
    const response = axios.get(API_DOMAIN + 'products/' + id)
    return (await response).data;    
}
app.get('/products/:id', async(req, res) => {
    console.log(req.params.id);
    const product = await getProductsid(req.params.id);
    res.send(product);
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at port : ${port}`);
  });