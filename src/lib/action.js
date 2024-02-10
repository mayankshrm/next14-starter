"use server"

import { signIn, signOut } from "./auth"

export  const handleGithub= async()=>{
   

    await signIn("github")

}

export const handleLogout=async()=>{
    
    await signOut();
}