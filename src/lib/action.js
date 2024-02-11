"use server"

import { signIn, signOut } from "./auth"
import ConnectDB from "./utils"
import { User } from "./models"

import bcrypt from "bcryptjs";

export  const handleGithub= async()=>{
   

    await signIn("github")

}

export const handleLogout=async()=>{
    
    await signOut();
}


export const register = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } =
      Object.fromEntries(formData);
  
    if (password !== passwordRepeat) {
      return { error: "Passwords do not match" };
    }
  
    try {
      ConnectDB();
  
      const user = await User.findOne({ username });
  
      if (user) {
        return { error: "Username already exists" };
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        img,
      });
  
      await newUser.save();
      console.log("saved to db");
  
      return { success: true };
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };

  export const login=async(previousState,formData)=>{
    const{username,password} =Object.fromEntries(formData);

    try {
        await signIn("credentials",{username,password});
    
    } catch (error) {
        if(error.message.includes("CredentialsSignin")){
          return {error:"password incorrect"}
        }

       throw error;
       
    }

  }