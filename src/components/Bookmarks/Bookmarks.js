import React from 'react';
import './style.css'

export default function Bookmarks(){
    const queue = JSON.parse(localStorage.getItem('profiles'));

    return(
        <div className='bookmark-container'>
            <h2><strong>Últimos usuários pesquisados.</strong></h2>
            {queue.map(users => (
                <div className='bookmark-profile'> 
                    <a href={users.html_url} className='bookmark-profile'>
                        <div className='profile-avatar'>
                            <img src={users.avatar_url} alt='profile'></img>
                        </div>
                        <div className='bookmark-info'>
                            <strong>{users.name}</strong><br></br>
                            <span>Bios:{users.bio}</span><br></br>
                            <span><strong>Followers:</strong>{users.followers}</span><br></br>
                            <span><strong>Following:</strong>{users.following}</span><br></br>
                            <span><strong>Repositorios:</strong>{users.public_repos}</span>                        
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}