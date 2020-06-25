import React from 'react';
import './style.css';

export default function Dashboard({inf}){
    console.log(inf)
    return(
        <div className='dashboard-container'>
            <a href={inf.html_url}>   
                <img src={inf.avatar_url} alt='profile'></img>
                    <div className='dashboard-profile-info'>
                        <strong>{inf.name}</strong><br></br>
                        <span>{inf.bio}</span><br></br>
                        <span><strong>Followers:</strong>{inf.followers}</span><br></br>
                        <span><strong>Following:</strong>{inf.following}</span><br></br>
                        <span><strong>Repositorios:</strong>{inf.public_repos}</span>
                    </div>
                </a>
            </div>
    );
}