import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';


export default function Logon() {


    return(
        <div className="container-logon">
            <section className="form">

                <form>
                    <h1>Login</h1>

                    <input 
                        placeholder="E-mail"
                    />

                    <input 
                        placeholder="Password"
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="link" to="/register" className="link">
                        <FiLogIn size={16} color="#fff" />
                        Inscrever-se no Secrets
                    </Link>
                </form>
            </section>
        </div>
    )
}
