import jwt from 'jsonwebtoken';
const ACCESSTOKENSECRET="my access token secret key"



const verifyToken=async(req,res,next)=>{
    try {
        const authHeader=req.headers.authorization;
        if(!authHeader){
            return res.status(401).json({success:false,message:'no token found'});
        }
        const token=authHeader.split(" ")[1];

        jwt.verify(token,ACCESSTOKENSECRET,(error,user)=>{
            if(error){
                return res.status(403).json({success:false,message:'invalid token'})
            }
            req.user=user;
            next()
        })

        
    } catch (error) {
       res.status(500).json({success:false,message:'cannot verify token'}) 
    }
}

export default verifyToken;