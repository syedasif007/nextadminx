import Link from "next/link";
import styles from "../ui/login/login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Link href="/dashboard" className={styles.link}>
          <button>Login</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
