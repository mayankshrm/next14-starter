'use client'
import React from "react";
import styles from "./links.module.css";
import { usePathname } from "next/navigation";
import NavLink from "./navLink/NavLink";
import Image from "next/image";
import { useState } from "react";

import { handleLogout } from "@/lib/action";

function Links({session}) {
  const mi = [
    {
      path: "/",
      title: "HomePage",
    },
    {
      path: "/about",
      title: "about",
    },
    {
      path: "/contact",
      title: "contact",
    },
    {
      path: "/blog",
      title: "blog",
    },
  ];

  
  const [open,setOpen]=useState(false);
  const openfn=()=>{
    setOpen(!open);
  }

  const fnx=()=>{
    setOpen(!open);
  }
  return (
    <div className={styles.container}>

    <div className={styles.links}>
      {mi.map((item) => (
        <NavLink item={item} key={item.path} />
      ))}
      {session ? (
        <>
          {session.user?.isAdmin && <NavLink item={{ path: "/admin", title: "admin" }} />}

          <form  action={handleLogout}>  
          <button className={styles.logout}>Logout</button>

          </form>
        </>
      ) : (
        <NavLink item={{ path: "/login", title: "login" }} />
      )}


    </div>  
    <Image
        className={styles.btn}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
        { open && 
    <div  onClick={() => setOpen((prev) => !prev)} className={styles.menu}>
        {mi.map((item)=>(
        <NavLink  item={item} key={item.title}/>
       ) )}


       {session ? (
        <>
          {session.user?.isAdmin && <NavLink item={{ path: "/admin", title: "admin" }} />}

          <form  action={handleLogout}>  
          <button className={styles.logout}>Logout</button>

          </form>
        </>
      ) : (
        <NavLink onClick={() => setOpen((prev) => !prev)} item={{ path: "/login", title: "login" }} />
      )}
    </div>
       
       
        }

    </div>
  );
}

export default Links;
