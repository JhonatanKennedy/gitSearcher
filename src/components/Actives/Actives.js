import React from 'react';
import './style.css'

export default function Actives(){
    const queue = JSON.parse(localStorage.getItem('profiles'));

    const reposSorted = queue.sort((a,b) => {
        if (a.updated_at < b.updated_at) return 1;
        if (a.updated_at > b.updated_at) return -1;
    });


    return(
        <div className='actives-container'>
            <h2><strong>Usuários mais ativos.</strong></h2>
            {reposSorted.map(users => (
                <div className='actives-profile'> 
                    <a href={users.html_url} className='actives-profile'>
                        <div className='profile-avatar'>
                            <img src={users.avatar_url} alt='profile'></img>
                        </div>
                        <div className='actives-info'>
                            <strong>{users.name}</strong><br></br>
                            <span><strong>Bios:</strong>{users.bio}</span><br></br>
                            <span><strong>Followers:</strong>{users.followers}</span><br></br>
                            <span><strong>Following:</strong>{users.following}</span><br></br>
                            <span><strong>Repositorios:</strong>{users.public_repos}</span>                        
                        </div>
                        <span><strong>Last updated at:</strong>{users.updated_at.slice(0,10).replace(/-/g,'/')}</span>  
                    </a>
                </div>
            ))}
        </div>
    )
}