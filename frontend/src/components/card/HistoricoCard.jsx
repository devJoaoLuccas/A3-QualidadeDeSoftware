import styles from './card.module.css'
import PropTypes from 'prop-types'

function HistoricoCard({medidas}) {


    return (
        <>
           {medidas.map((medida) => (
                <div 
                    key={medida.idMedidas}
                    className={styles.card}>
                    <div
                        className={styles.card_details}>
                        <header>
                            <h2>{medida.resultado}</h2>
                            <span>
                                <p>Altura: {medida.altura}</p>
                                <p>Peso: {medida.peso}</p>
                            </span>
                        </header>
                        <h4>Imc: {medida.imc}</h4>
                    </div>
                </div>
        ))}
        </>
    )
}

HisotricoCard.propTypes = {
    medidas: PropTypes.object
}




export default HistoricoCard;