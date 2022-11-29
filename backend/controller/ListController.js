import List from '../model/ListModel.js'

//CREATE
const addListController=async(req,res)=>{
    if(req.user.isAdmin){
        const list=new List(req.body)
        try {
            const result=await list.save();
            res.status(201).json({success:true,message:'movie stored successfully',data:result})
        } catch (error) {
            res.status(500).json({success:false,message:'cannot save movie'})
        }
    }else{
        res.status(403).json({success:false,message:'user not authorized'})
    }
}

//DELETE
const deleteListController=async(req,res)=>{
    if(req.user.isAdmin){
        try {
            const result=await List.findByIdAndDelete(req.params.id);
            res.status(200).json({message:"list deleted successfully"})
        } catch (error) {
            res.status(400).json({message:"cannot execute delete list controller"})
        }
    }else{
        res.status(403).json({success:false,message:"user not authorized"})
    }
}

//GET LIST
const getListController=async(req,res)=>{
    const typeQuery=req.query?.type;
    const genreQuery=req.query?.genre;
    let list=[];
    try {
        if(typeQuery){
            if(genreQuery){
                list=await List.aggregate([
                    {$sample:{size:10}},
                    {$match:{type:typeQuery,genre:genreQuery}}
                ])
            }else{
                list=await List.aggregate([
                    {$sample:{size:10}},
                    {$match:{type:typeQuery}}
                ])
            }
        }else{
            list=await List.aggregate([{$sample:{size:10}}])
        }
        res.status(200).json({data:list})
    } catch (error) {
        res.status(500).json({message:'cannot execute get ist controller'})
    }
}



export {addListController,deleteListController,getListController}