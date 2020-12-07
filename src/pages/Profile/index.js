import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './styles.css';

export default function Profile() {

    return(
        <div className="profile-container">
            <header>
                <span>Welcome</span>

                <Link className="button" to="/poster">Contar segredo</Link>
                <button type="button">
                    <FiPower className="off" size={18} color= "#fff" />
                </button>
            </header>
            <h1>Suas Verdades</h1>

            <ul>
                    <li>
                        <strong>Anônimo</strong>
                        <p>Não aguento mais a merda da faculdade?</p>
                
                        <button type="button">
                            <FiTrash2 size={20} color= "#000" style={{background: '#fff'}}/>
                        </button>
                    </li>

                    <li>
                        <strong>Anônimo</strong>
                        <p>claramente o coordenador desse curso não é um coordenador :)</p>
                
                        <button type="button">
                            <FiTrash2 size={20} color= "#000" style={{background: '#fff'}}/>
                        </button>
                    </li>

                    <li>
                        <strong>Anônimo</strong>
                        <p>Quando vou acabar esse curso?</p>
                
                        <button type="button">
                            <FiTrash2 size={20} color= "#000" style={{background: '#fff'}}/>
                        </button>
                    </li>

                    <li>
                        <strong>Anônimo</strong>
                        <p>VAI SE FUDER SIA</p>
                
                        <button type="button">
                            <FiTrash2 size={20} color= "#000" style={{background: '#fff'}}/>
                        </button>
                    </li>
            </ul>
        </div>
    );
}