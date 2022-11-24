import Movie from '../model/MovieModel.js'

const addMovieController=async(req,res)=>{
    if(req.user.isAdmin){
        const movie=new Movie(req.body)
        try {
            const result=await movie.save();
            res.status(201).json({success:true,message:'movie stored successfully',data:result})
        } catch (error) {
            res.status(500).json({success:false,message:'cannot save movie'})
        }
    }else{
        res.status(403).json({success:"false",message:'user not authorized'})
    }
}

const updateMovieController=async(req,res)=>{
    if(req.user.isAdmin){
        try {
            const result=await Movie.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{
                new:true
            });
            res.status(201).json({success:true,message:'movie updated successfully',data:result})
        } catch (error) {
            res.status(500).json({success:false,message:'cannot update movie'})
        }
    }else{
        res.status(403).json({success:"false",message:'user not authorized'})
    }
}

const deleteMovieController=async(req,res)=>{
    if(req.user.isAdmin){
        try {
            const result=await Movie.findByIdAndDelete(req.params.id);
            res.status(201).json({success:true,message:'movie deleted successfully'})
        } catch (error) {
            res.status(500).json({success:false,message:'cannot delete movie'})
        }
    }else{
        res.status(403).json({success:"false",message:'user not authorized'})
    }
}

const getSingleMovieController=async(req,res)=>{
    try {
        const result=await Movie.findById(req.params.id)
        if(!result){
            return res.status(400).json({success:false,message:'cannot get movie'})
        }
        res.status(200).json({success:true,message:'movie found',data:result})
    } catch (error) {
        res.status(500).json({success:false,message:'cannot execute get single movie controll3er'})
    }
}

const getAllMovieController=async(req,res)=>{
    try {
        const result=await Movie.find()
        if(!result){
            return res.status(400).json({success:false,message:'cannot get movie'})
        }
        res.status(200).json({success:true,message:'movie found',data:result})
    } catch (error) {
        res.status(500).json({success:false,message:'cannot execute get all movie controll3er'})
    }
}

const getRandomMovieController=async(req,res)=>{
    const type=req.query.type;
    let movie;
    try {
        if(type==="series"){
            movie=await Movie.aggregate([
                {$match:{isSeries:true}},
                {$sample:{size:1}}
            ]);
        }else{
            movie=await Movie.aggregate([
                {$match:{isSeries:false}},
                {$sample:{size:1}}
            ]);
        }
        res.status(200).json({success:true,message:'random movie retrieved',data:movie})
    } catch (error) {
        res.status(500).json({success:false,message:'cannot execute get random movie'})
    }
}
export {addMovieController,updateMovieController,deleteMovieController,getAllMovieController,getSingleMovieController,getRandomMovieController}