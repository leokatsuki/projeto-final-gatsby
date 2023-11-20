import React from 'react'
import { Link } from 'gatsby'
import '../styles.css'
import Logo from '../../../svg/logo.svg';

function Notfound() {
    return (
        <section className="container">
            <div className="flex-center">
                <img src={Logo} className="icon-l" alt="" />
            </div>

            <div className="flex-column-center">
                <h1 className="h0 color-blue">404</h1>
                <h5>Página não encontrada!</h5>
                <p className="mt-1">
                    A página que você tá procurando não existe 
                    ou foi removida. Clique para voltar 
                    para o site.
                </p>
                <Link to="/" className="btn w-30 mt-6">Voltar p/ home</Link>
            </div>
        </section>
    )
}

export default Notfound