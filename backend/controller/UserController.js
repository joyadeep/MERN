import User from '../model/UserModel.js'

const updateController=async(req,res)=>{
    try {
        if(req.user.id===req.params.id || req.user.isAdmin){
            console.log("passed first if")
            // if(req.body.password){
            //     console.log(req.body.password)
            //     const salt=await bcrypt.genSalt(10);
            //     const newPW=await bcrypt.hashSync(password,salt);
            //     req.body.password=newPW
            // }
            console.log("passwd second if")
            console.log(req.params.id, req.body)
            const updated=await User.findByIdAndUpdate(req.params.id,
                {
                    $set:req.body
                },{
                    new:true
                })
                if(!updated){
                    return res.status(400).json({success:false,message:'cannot update data'})
                }
                res.status(200).json({success:true,message:'data updated successfully',data:updated})
        }
        
    } catch (error) {
        res.status(500).json({success:false,message:'cannot execute update controller'})
    }
}

const deleteController=async(req,res)=>{
    try {
        if(req.user.id===req.params.id || req.user.isAdmin){
            const result=await User.findByIdAndDelete(req.params.id)
            if(!result){
                return res.status(400).json({success:false,message:'cannot delete user'})
            }
            res.status(200).json({success:true,messsage:'user deleted successfully'})
        }
        else{
            res.status(401).json({success:false,message:'you are not authorized'})
        }
    } catch (error) {
        res.status(500).json({success:false,message:'cannot execute delete user '})
    }
}

const getSingleUserController=async(req,res)=>{
    try {
        const result=await User.findOne({_id:req.params.id})
        if(!result){
            return res.status(400).json({success:false,message:"cannot get single user"})
        }
        res.status(200).json({success:true,message:'user extracted successfully',data:result})
    } catch (error) {
        res.status(500).json({success:false,message:'cannot execute get single user controller'})
    }
}

const getAllUserController=async(req,res)=>{
    if(req.user.isAdmin){
        try {
            const result=await User.find();
            if(!result){
                return res.status(400).json({success:false,message:"cannot find any result"})
            }
        } catch (error) {
            res.status(500).json({success:false,message:"cannot execute get all user controller"})
            
        }
    }else{
        res.status(403).json({success:false,message:'user not authorized'})
    }
}

export {updateController,deleteController,getSingleUserController,getAllUserController}