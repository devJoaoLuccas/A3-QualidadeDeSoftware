
import { useNavigate } from 'react-router-dom';
import styles from './Menus.module.css'


function HomepageMenus() {

    const navigate = useNavigate();

    const calculadora = () => {
        navigate('/homepage/calculadoraImc')}; 

    const logOff = () => {
        navigate('/');};

    const verificarHistorico = () => {
        navigate('/homepage/historico');
    }

    return (
        <div
            className={styles.buttons_homepage}>
            <button
                onClick={calculadora}>
                Calcular IMC
            </button>
            <button
                onClick={verificarHistorico}>
                Verificar Histórico
            </button>
            <button
                onClick={logOff}>
                Sair
            </button>
        </div>
    )
}




export default HomepageMenus;