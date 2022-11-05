const authClient=require('google-auth-library');
const client=new authClient.OAuth2Client('929890687294-ibq6ke7ag7birr6otejoqdvkc2mp7p9a.apps.googleusercontent.com');

const auth=async(req,res,next)=>{
    try {
        const token=req.headers.authorization.split(' ')[1];
        console.log("token :",token)
        const googleToken=token.length>1000;
        if(googleToken){
            const ticket=await client.verifyIdToken({
                idToken:token,
                audience:'929890687294-ibq6ke7ag7birr6otejoqdvkc2mp7p9a.apps.googleusercontent.com'
            })
            const payload=ticket.getPayload()
            req.user={id:payload.sub,name:payload.name,email:payload.email,photoURL:payload.picture}
            next()
        }
        else{
            console.log("error")
        }
        
    } catch (error) {
       console.log(error)
        res.status(401).json({
            success:false,
            message:'something went wrong'
       }) 
    }
}

module.exports=auth;