import { auth, signIn } from '@/lib/auth'
import React from 'react'
import { handleGithub } from '@/lib/action';


const  page= async() =>{

    const session = await auth();

    console.log(session);


  return (
    <form action={handleGithub}>
        <button> login with github</button>
    </form>
  )
}

export default page