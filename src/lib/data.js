import { Post, User } from "./models";
import ConnectDB from "./utils";



export const getPosts = async () => {
  try {
    ConnectDB();
    const posts= Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("something went wrong ")
  }
};

export const getSinglePost =async(slug) =>{
    try {
        ConnectDB();
        const post = Post.findOne({slug});
        return post
    } catch (error) {
        throw new Error("something went wrong");
    }
}



export const getUsers =async() =>{
    try {
        ConnectDB();
        const users = User.find();
        return users;
    } catch (error) {
        throw new Error("something went wrong");
    }
}

export const getUser =async(id) =>{
    try {
        ConnectDB();
        const user= User.findById(id);
        return user;
    } catch (error) {
        throw new Error("something went wrong");
    }
}