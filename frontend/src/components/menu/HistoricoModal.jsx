import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Menus.module.css'


import HistoricoCard from '../card/HistoricoCard.jsx';



function HistoricoModal() {


    const userId = localStorage.getItem('userId');
    const [medida, setMedida] = useState([]);

    const navigate = useNavigate();
    const voltar = () => {
        return navigate('/homepage')
    }


    useEffect (() => {
        fetch(`http://localhost:3000/medidas/3`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setMedida(data);
                console.log(data);
            })
            .catch((err) => console.log(err))
    }, []);

    return (
        <>
            <HistoricoCard 
                medidas={medida}
            />            
            <button
                className=
                    {styles.button}
                onClick={voltar}>
                Voltar
            </button>
        </>
    )
    
}



export default HistoricoModal;