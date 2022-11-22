import {Router} from "express";
import {AuthenticatedUser, updateProduct,postProduct, deleteProducts,listProducts, Login, Logout, Refresh, Register} from "./controller/auth.controller";

export const routes = (router: Router) => {
    router.post('/api/register', Register);
    router.post('/api/login', Login);
    router.get('/api/user', AuthenticatedUser);
    router.post('/api/refresh', Refresh);
    router.post('/api/logout', Logout);
    //Tronaba por que no habia creado la ruta
    router.get('/api/list', listProducts);
    
    router.delete('/api/list/:id', deleteProducts);
    router.post('/api/list', postProduct);
    router.put('/api/list/:idp', updateProduct);
}
