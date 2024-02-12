

import { handleGithub } from "@/lib/action";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/LoginForm";


const LoginPage = () => {
      
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithub}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm/>
      </div>
    </div>
  );
};

export default LoginPage;