import styles from './Menus.module.css'


function HomepageMenus() {


    return (
        <div
            className={styles.buttons_homepage}>
            <button>
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