
import { useNavigate } from 'react-router-dom';
import styles from './Menus.module.css'


function HomepageMenus() {

    const navigate = useNavigate();

    const calculadora = () => {
        navigate('/homepage/calculadoraImc')}; 

    const logOff = () => {
        navigate('/');};

    return (
        <div
            className={styles.buttons_homepage}>
            <button
                onClick={calculadora}>
                Calcular IMC
            </button>
            <button>
                Verificar Histórico
            </button>
            <button>
                Meu Perfil
            </button>
            <button
                onClick={logOff}>
                Sair
            </button>
        </div>
    )
}




export default HomepageMenus;