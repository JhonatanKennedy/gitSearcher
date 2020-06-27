import React, { useState, useEffect } from 'react';
import {FaSearch} from 'react-icons/fa';
import Api from '../../services/api';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';
import './style.css';

const validations = yup.object().shape({
    user: yup.string().required('É necessário um usuário!')
});

export default function Searcher({ callback }){
    const [queue,setQueue] = useState(JSON.parse(localStorage.getItem('profiles')) || []);

    useEffect(()=>{
        localStorage.setItem('profiles',JSON.stringify(queue));
    },[queue])

    async function handleSearch(data){

        var user = data.user;
        try{
            const profile = await Api.get(`users/${user}`);
            const repos = await Api.get(`users/${user}/repos`)
            const data = {profile,repos}    
            callback(data);

            const storageProfile = {
                id: profile.data.id,
                avatar_url: profile.data.avatar_url,
                html_url: profile.data.html_url,
                name: profile.data.name,
                bio:profile.data.bio,
                followers: profile.data.followers,
                following:  profile.data.following,
                public_repos: profile.data.public_repos,
                updated_at: profile.data.updated_at
            };      

            if( queue.length < 5 && 
                queue.map( obj => obj.id).indexOf(storageProfile.id) === -1){
                setQueue([...queue,storageProfile]);
            }else{
                setQueue([...queue.shift(),storageProfile]);
            }
            
        }catch(err){
            alert('Erro na busca desse usuário.')
        }
    }

    return(
        <div className='searcher-flex'>
            <div className='flex-item'>
                <span>Digite o usuario:</span>
                <Formik initialValues={{ user: '' }} 
                onSubmit={( data ) => (handleSearch(data))}
                validationSchema={validations}
                >
                    {() => (
                        <Form>
                            <Field placeholder='Digite o usuário'
                            name='user'
                            type='input'
                            />
                            <button type='submit'><FaSearch/></button>
                            <ErrorMessage component='p' name='user'/>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}