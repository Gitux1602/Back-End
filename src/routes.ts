import {Router} from "express";
import {AuthenticatedUser, updateProduct,postProduct, deleteProducts,listProductsID,listProducts, Login, Logout, Refresh, Register} from "./controller/auth.controller";

export const routes = (router: Router) => {
    router.post('/api/register', Register);
    router.post('/api/login', Login);
    router.get('/api/user', AuthenticatedUser);
    router.post('/api/refresh', Refresh);
    router.post('/api/logout', Logout);
    router.get('/', listProducts);
    router.get('/api/listProducts/listProductsID', listProductsID);
    router.delete('/api/listProducts/deleteProducts', deleteProducts);
    router.post('/api/listProducts/postProduct', postProduct);
    router.get('/api/listProducts/updateProduct', updateProduct);
}
