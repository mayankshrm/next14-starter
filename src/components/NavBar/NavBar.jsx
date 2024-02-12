import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth"



const NavBar =async () => {

  const session = await auth();
  console.log(session);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Blocked Blogging</div>
      <div>
       <Links session={session}/>
      </div>
    </div>
  )
}

export default NavBar