import  express  from "express";
const router = express.Router();
import UserController from "../controllers/userController.js";
import checkUserAuth from "../middlewares/auth-middleware.js";

//route level middleware - to protect route
router.use('/changepassword', checkUserAuth)
router.use('/loggeduser', checkUserAuth)

//public routes
router.post('/register', UserController.userRegistration),
router.post('/login', UserController.userLogin)
router.post('/send-reset-password-email', UserController.sendUserPasswordResetEmail)
router.post('/reset-password/:id/:token', UserController.userPasswordReset)
router.post('/bloodbank/recipient/request',UserController.bloodDonation)

//private routes
router.post('/changepassword', UserController.changePassword)
router.get('/loggeduser', UserController.loggedUser)
    


export default router