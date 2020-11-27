import React, {useState} from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


export default function Register() {

    return(
        <div className="container-register">
            <div className="content">
                <section>
                    <h1>Criar sua conta</h1>

                    <Link className="back" to="/">
                        <FiArrowLeft size={16} color="#341933" />
                        Entrar em minha conta
                    </Link>
                </section>
                <form>
                    <input 
                        placeholder="Nome" 
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                    />
                    <input 
                        placeholder="Celular"
                    />
                    <div className="input-group">
                    </div>
                    <button className="buttonn" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}