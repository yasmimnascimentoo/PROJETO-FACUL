import React, {useState} from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function NewPoster() {
    

    return (
        <div className="container-new-poster">
            <div className="content">
                <section>
                    <h1>Conte seu segredo</h1>
                </section>
                <form>
                    <textarea 
                        placeholder="Segredo"
                    />
                    <button className="button" type="submit">Contar</button>
                </form>
            </div>
        </div>
    )
}
