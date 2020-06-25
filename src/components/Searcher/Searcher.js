import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import Api from '../../services/api';
import './style.css';

export default function Searcher({ callback }){
    const [user,setUser] = useState('');

    async function handleSearch(e){
        e.preventDefault();
        const profile = await Api.get(`users/${user}`);
        const repos = await Api.get(`users/${user}/repos`);
        const data = {profile,repos}
        callback(data);
    }

    return(
        <div className='searcher-flex'>
            <div className='flex-item'>
                <span>Digite o usuario:</span>
                <form onSubmit={handleSearch}>
                    <div>
                        <input type='text' placeholder='Digite o usuario'
                        value={user} onChange={e => {setUser(e.target.value)}}
                        />
                        <button type='submit'><FaSearch/></button>
                    </div>
                </form>
            </div>
        </div>
    );
}