import React from 'react';
import './style.css';

export default function Dashboard({ data }){
    
    const profile = data.profile.data;
    const repos = data.repos.data;

    return(
        <div className='dashboard-container'>
            <a href={profile.html_url}>   
                <img src={profile.avatar_url} alt='profile'></img>
                    <div className='dashboard-profile-info'>
                        <strong>{profile.name}</strong><br></br>
                        <span>{profile.bio}</span><br></br>
                        <span><strong>Followers:</strong>{profile.followers}</span><br></br>
                        <span><strong>Following:</strong>{profile.following}</span><br></br>
                        <span><strong>Repositorios:</strong>{profile.public_repos}</span>
                    </div>
                </a>
        
            <div className='dashboard-repositories'>
                <ul>
                    {repos.map(repos =>(
                        <a href={repos.url}>
                            <li key={repos.id}>
                                <span><strong>Título:</strong>{repos.name}</span>
                                <span><strong>Descrição:</strong>{repos.description}</span>
                                <span><strong>Branch:</strong>{repos.default_branch}</span>
                                <div>
                                    <span><strong>Stars: </strong>{repos.stargazers_count}</span>&nbsp;&nbsp;
                                    <span><strong>Watchers: </strong>{repos.watchers_count}</span>&nbsp;&nbsp;
                                    <span><strong>Commits: </strong>{repos.stargazers_count}</span>

                                </div>
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    );
}