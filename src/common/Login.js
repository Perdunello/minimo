import styles from "../styles/Login.module.scss";

const Login = () => {
    return <div className={styles.login}>
        <form action="post">
            <div className={styles.title}>Sign up for our newsletter!</div>
            <input className={styles.input} type="text" placeholder='Enter a valid email address'/>
        </form>
    </div>
}
export default Login