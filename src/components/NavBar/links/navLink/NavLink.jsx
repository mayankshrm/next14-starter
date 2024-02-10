'use client';
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import styles from "./navLink.module.css";

function NavLink({item}) {

  const path=usePathname();

  return (
    <Link href={item.path} className={`${styles.container } ${path==item.path && styles.navLink}`}>{item.title}</Link>
  )
}

export default NavLink