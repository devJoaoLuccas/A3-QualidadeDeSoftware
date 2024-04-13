import SignUpForm from "../../components/forms/SignUpForm";
import Header from "../../components/menu/Header";
import styles from './SignUp.module.css'


function SignUp() {
    

    return (
        <main>
            <section
                className={styles.screen}>
                <article
                    className={styles.box}>
                    <Header />
                    <SignUpForm />
                    <footer>

                    </footer>
                </article>
            </section>
        </main>
    )
}


export default SignUp;