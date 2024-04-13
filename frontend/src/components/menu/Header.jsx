import styles from '../../pages/Login/LoginPage.module.css'

function Header() {

    return (
        <header>
            <img 
                className={styles.logo}
                src="src/assets/icons/_iconCalculadora.png" 
                alt="logo"/>
            <h1>Calculadora de IMC</h1>
        </header>
    )
}


export default Header;