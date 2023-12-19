import  express,{Request,Response} from 'express';
import passport from "passport";
const router = express.Router();

router.post('/auth/login',
    passport.authenticate('local',{failureRedirect:'/auth/login-failure'}),
    (req:Request,res:Response) => {
        res.redirect('/auth/login-success')
    })

    router.get('/auth/login-success',(req:Request,res:Response) =>{
        res.json({message:'Login successful'})
    });

    router.get('/auth/login-failure',(req:Request,res:Response) => {
        res.json({message:'Login failed'})
    })