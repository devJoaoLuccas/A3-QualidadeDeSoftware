import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import styles from './Form.module.css';
import { CalcularImc } from '../CalcFunctions/CalcularImc.jsx'
 
function Calculadora() {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [usuarioImc, setImc] = useState();
    const [categoriaImc, setCategoriaImc] = useState('');
    const navigate = useNavigate();

    const calcular = () => {
        const imc = CalcularImc(peso, altura)
        definirImc(imc);
        setImc(imc);
    }

    const definirImc = (imc) => {
        if (imc <= 18.5) {
            setCategoriaImc('Abaixo do peso');
        } else if (imc >= 18.5 && imc <= 24.9) {
            setCategoriaImc('Peso Normal');
        } else if (imc >= 25 && imc <= 29.9) {
            setCategoriaImc('Sobrepeso');
        } else {
            setCategoriaImc('Obeso');
        }
    }

    const voltar = () => {
        navigate('/homepage')};

    return (
        <>
        <div>
            {categoriaImc ? 
            <p
                className={styles.result_text}>
                O imc do USERNAME é {usuarioImc.toFixed(2)} e ele é definido como  
                  <span>
                     {categoriaImc}.       
                 </span>
            </p>
            : null}
        </div>
        <div
            className={styles.input_box}>
            <label
                className={styles.label} 
                id="altura">
                    Altura (Metros²)
            </label>
            <div
                className={styles.input_container_calculadora}>
                <div
                    className={styles.logo_container}>
                    <img 
                        src="../src/assets/icons/_iconAltura.png" 
                        alt="iconAltura"/>
                </div>
                <input 
                    onChange={(e) => setAltura(e.target.value)}
                    id='altura'
                    className={styles.input_calculadora}
                    type="number" />
            </div>
        </div>
        <div
            className={styles.input_box}>
            <label
                className={styles.label} 
                id="peso">
                    Peso (KG)
            </label>
            <div
                className={styles.input_container_calculadora}>
                <div
                    className={styles.logo_container}>
                    <img 
                        src="../src/assets/icons/_iconPeso.png" 
                        alt="iconPeso"/>
                </div>
                <input 
                    onChange={(e) => setPeso(e.target.value)}
                    id='peso'
                    className={styles.input_calculadora}
                    type="number" />
            </div>
        </div>
        <div
            className={styles.button_box}>
            <button
                onClick={voltar}>
                    Voltar
            </button>
            <button
                onClick={calcular}>
                    Calcular
            </button>
        </div>
    </>
    )
}


export default Calculadora;