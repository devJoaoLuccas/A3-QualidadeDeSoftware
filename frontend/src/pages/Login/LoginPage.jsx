import styles from './LoginPage.module.css'

import LoginForm from "../../components/forms/LoginForm";
import Header from '../../components/menu/Header';

function LoginPage() {


    return (
        <>
            <main>
                <section
                     className={styles.screen}>
                    <article
                        className={styles.box}>
                        <Header />
                        <LoginForm />
                        <footer>                                                                                                                                                                                             
                        </footer>
                    </article>
                </section>
            </main>
        </>
    )

}


export default LoginPage;