import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Searcher from '../../components/Searcher/Searcher';
import Dashboard from '../../components/dashboard/Dashboard';
import './style.css';

export default function Index(){
    
    const [data,setData] = useState('');
    const [ordenacao,setOrdenacao] = useState(true);
    return(
        <div>
            <Header/>
            <Searcher callback={(data)=>{setData(data)}}/>
            {data &&             
                <div className="container-ordenacao">
                    <span>Ordenar por: </span>
                    <button onClick={()=>{setOrdenacao(true)}}>Crescente</button>
                    <button onClick={()=>{setOrdenacao(false)}}>Decrescente</button>
                </div>
            }
            {data && <Dashboard data={data} sort={ordenacao}/>}
            
        </div>

    );
}