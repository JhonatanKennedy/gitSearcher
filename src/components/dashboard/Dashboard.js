import React from 'react';
import './style.css';

export default function Dashboard({ data, sort }){
    const profile = data.profile.data;
    const repos = data.repos.data;

    const reposSorted = repos.sort((a,b) => {
            if(sort === true){
                if (a.updated_at < b.updated_at) return -1;
                if (a.updated_at > b.updated_at) return 1;
            }else{
                if (a.updated_at < b.updated_at) return 1;
                if (a.updated_at > b.updated_at) return -1;
            }
        });

    return(
        <div className='dashboard-container'>
            <div className='dashboard-profile'>
                <a href={profile.html_url}>   
                <img src={profile.avatar_url} alt='profile'></img>
                    <div className='dashboard-profile-info'>
                        <strong>{profile.name}</strong><br></br>
                        <span><strong>Bios:</strong>{profile.bio}</span><br></br>
                        <span><strong>Followers:</strong>{profile.followers}</span><br></br>
                        <span><strong>Following:</strong>{profile.following}</span><br></br>
                        <span><strong>Repositorios:</strong>{profile.public_repos}</span>
                    </div>
                </a>                
            </div>

        
            <div className='dashboard-repositories'>
                <ul>
                    {reposSorted.map(repos =>(
                        <a href={repos.html_url}>
                            <li key={repos.id}>
                                <span><strong>Título:</strong>{repos.name}</span>
                                <span><strong>Descrição:</strong>{repos.description}</span>
                                <span><strong>Branch:</strong>{repos.default_branch}</span>
                                <div>
                                    <span><strong>Data Última Atualização: </strong>{repos.updated_at.slice(0,10)}</span>&nbsp;&nbsp;
                                    <span><strong>Hora Última Atualização: </strong>{repos.updated_at.slice(11,19)}</span>
                                </div>                        
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