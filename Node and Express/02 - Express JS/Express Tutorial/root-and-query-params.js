const express = require('express');
const { products, people } = require('./data');
const app = express();

app.get('/', (req, res) => {

    res.status(200)
        .send('<h1>Home Page</h1><a href="/api/products">Products</a>');

});

app.get('/api/products', (req, res) => {

    const { id, search } = req.query

    if(id) 

        res.json(products.find(product => product.id === Number(req.query.id)));

    else {

        if(search) {

            let sortedProducts = products;

            sortedProducts = sortedProducts.filter((product) => {
                return product.name.startsWith(search)
            });

            res.json(sortedProducts);

        } else 

            res.json(products.map((product) => {
                const { id, name, image } = product;
                return { id, name, image };
            }));

    }

});

app.get('/api/products/:id', (req, res) => {

    res.json(products.find(product => product.id === Number(req.params.id)));

})

app.listen(5000, () => console.log('Server is listening on port 5000...'));