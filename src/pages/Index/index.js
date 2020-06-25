import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Searcher from '../../components/Searcher/Searcher';
import Dashboard from '../../components/dashboard/Dashboard';
import './style.css';

export default function Index(){
    
    const [data,setData] = useState('');

    return(
        <div>
            <Header/>
            <Searcher callback={(data)=>{setData(data)}}/> 
            {data && <Dashboard inf={data} />}
            
        </div>

    );
}