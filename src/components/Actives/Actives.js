import React, { useState, useEffect} from 'react';
import Api from '../../services/api';
import './style.css'


export default function Actives(){
    const [users,setUsers] = useState({});

    async function getUsers(){
        try{
            const req = await Api.get('search/users?q=repos%3A%3E%3D45000&sort=repositories&order=desc&');
            setUsers(req.data);
        }catch (err){
            alert('Erro ao carregar, tente novamente!');
        }
    }
    useEffect(() => {
        getUsers();
    },[]);

    const usersActive = users.items;

    return(
        <div className='actives-container'>
            <h2><strong>Usuários mais ativos do git.</strong></h2>
            {usersActive && usersActive.map((element,index) => (
                <a href={element.html_url} key={element.id} className='actives-url'>
                    <div className='actives-profile'>
                        <div className='actives-avatar'>
                            <span><strong>{index+1}º</strong></span>
                            <img src={element.avatar_url} alt='profile'/>                            
                        </div>
                        <div className='active-profile-info'>
                            <span><strong>{element.login}</strong></span>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}