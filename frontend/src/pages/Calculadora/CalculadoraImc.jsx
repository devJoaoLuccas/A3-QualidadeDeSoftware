import styles from './CalculadoraImc.module.css'

import Calculadora from '../../components/forms/Calculadora.jsx';

function CalculadoraImc() {

    return (
        <main>
            <section 
                className={styles.screen}>
                <article
                    className={styles.box}>
                    <header>
                        <h1>Calculadora de IMC</h1>
                    </header>
                    <Calculadora />
                </article>
            </section>
        </main>
    )
}

export default CalculadoraImc;