import styles from './Homepage.module.css'

import HomepageMenus from "../../components/menu/HomepageMenus";
import Header from '../../components/menu/Header';

function Homepage() {

    const user = localStorage.getItem("username");

    return (
        <main>
            <section
                className={styles.screen}>
                <article
                    className={styles.box}>
                    <Header />
                    <HomepageMenus />
                    <footer
                        className={styles.footer}>
                        <p>{user}</p>
                    </footer>
                </article>
            </section>
        </main>
    )

}


export default Homepage;