import  express  from "express";
const router = express.Router();
import UserController from "../controllers/userController.js";

//public routes
router.post('/resgister', UserController.userRegistration)


//private routes



export default router