
import { useNavigate } from 'react-router-dom';
import styles from './Menus.module.css'


function HomepageMenus() {

    const navigate = useNavigate();

    const calculadora = () => {
        navigate('/homepage/calculadoraImc')}; 


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
            <button>
                Sair
            </button>
        </div>
    )
}




export default HomepageMenus;