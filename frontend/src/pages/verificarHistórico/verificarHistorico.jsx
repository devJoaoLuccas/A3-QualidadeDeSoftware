import styles from './verificarHistorico.module.css'

import Header from '../../components/menu/Header';
import HistoricoModal from '../../components/menu/HistoricoModal';

function VerificarHistórico() {
    


    return (
        <main>
            <section
                className={styles.screen}>
                <article
                    className={styles.box}>
                    <Header />
                    <HistoricoModal />
                </article>
            </section>
        </main>
    )

}


export default VerificarHistórico;