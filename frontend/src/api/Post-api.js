import axios from 'axios';

export const getAllPost=async()=>{
    const res=await axios.get("/post/");
    if(res.status !== 200){
        return console.log("something went wrong")
    }
    return res.data.data;
}

export const AuthUser=async(Issignup,data)=>{
    const res=await axios.post(`/user/${Issignup?"register":"login"}`,data);
    return res.data.data;
}

export const AddPost=async(data)=>{
    const res=await axios.post("/post",data);
    return res;
}

export const getPostByID=async(id)=>{
    const res=await axios.get(`/post/${id}`);
    return res.data.data;
}

export const updatePost=async(id,data)=>{
    const res=await axios.patch(`/post/${id}`,data);
    return res;
}

export const deletePost=async(id)=>{
    const res=await axios.delete(`/post/${id}`)
    return res;
}