const express               = require('express');
const router                = express.Router();

//Controllers
// const user       = require('../controllers/users.controller');
// const category       = require('../controllers/categories.controller');
// const product       = require('../controllers/products.controller');
// const order       = require('../controllers/orders.controller');
// Auth
// const auth    = require('../controllers/auth.controller');

//Api
router.get('/', (req, res) => {
    res.send('api works');
});


//users
// router.get('/users',user.getAll);
// router.get('/users/:id',user.getById);
// router.post('/users', user.create);
// router.delete('/users/:id',user.removeById);
// router.put('/users/:id', user.updateById);


//categories
// router.get('/categories',category.getAll);
// router.get('/categories/:id',category.getById);
// router.post('/categories', category.create);
// router.delete('/categories/:id',category.removeById);
// router.put('/categories/:id', category.updateById);


//product
// router.get('/products',product.getProductFunc);
// router.get('/products/:id',product.getById);
// router.post('/products', product.create);
// router.delete('/products/:id',product.removeById);
// router.put('/products/:id', product.updateById);

// router.get('/paging/products/',product.getLimit); // for client
// router.get('/search/products/',product.searchProduct); // for client


//order
// router.get('/orders', order.getAll);
// router.get('/orders/:id',order.getById);
// router.post('/orders',order.create);
// router.delete('/orders/:id',order.removeById);
// router.put('/orders/:id', order.updateById);

//login
// router.post('/login', auth.login);

module.exports = router;