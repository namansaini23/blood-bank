import  express  from "express";
const router = express.Router();
import UserController from "../controllers/userController.js";
import checkUserAuth from "../middlewares/auth-middleware.js";

//route level middleware - to protect route
router.use('/changepassword', checkUserAuth)

//public routes
router.post('/register', UserController.userRegistration),
router.post('/login', UserController.userLogin)


//private routes
router.post('/changepassword', UserController.changePassword)


export default router