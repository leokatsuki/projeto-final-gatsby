import React from 'react'
import Logo from "../../../svg/logo.svg";
import Facebook from '../../../svg/icon-facebook.svg';
import Instagram from '../../../svg/icon-instagram.svg';
import Twitter from '../../../svg/icon-twitter.svg';
import Youtube from '../../../svg/icon-youtube.svg';
import { Link } from 'gatsby';



function Footer() {
    return (
        <section className="footer pb-0 mt-9">
            <div className="flex-center mt-5">
                <img src={Logo} className='img-footer' alt="" />
            </div>

            <div className="pb-3">
                <div className='grid-3'></div>
                <div className="grid-3">
                    <h4>Mapa do site</h4>
                    <div className="flex-start-column mt-2">
                        <Link to='/' className="color-gray">Home</Link>
                        <Link to='/about' className="color-gray">Sobre</Link>
                        <Link to='/blog' className="color-gray">Posts</Link>
                        <Link to='/newpost' className="color-gray ">Adicionar post</Link>
                    </div>
                    
                </div>

                <div className="grid-6">
                    <h4 className="mb-2">Quer ser avisado dos novos posts do blog?</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Ornare urna pharetra ut ac, pellentesque. 
                    </p>
                    <div className="flex-start-row mt-2">
                        <input type="text" name="search" id="" placeholder="Digite seu e-mail aqui" />
                        <button className="btn ml-2">Cadastrar</button>
                    </div>
                </div>
            </div>

            <div className="grid-9">
                <p>2023 | Todos os direitos reservados. Projeto GATSBY do curso de <a href="https://posgraduacao.infnet.edu.br/ead/pos-graduacao-desenvolvimento-web-full-stack/" target="_blank" rel="noreferrer">desenvolvimento web fullstack.</a> | Leonardo Katsuki Hiramatsu Rocha</p>
            </div>

            <div className="grid-3">
                <img src={Facebook} className="icon-s" alt="" />
                <img src={Instagram} className="icon-s ml-2" alt="" />
                <img src={Twitter} className="icon-s ml-2" alt="" />
                <img src={Youtube} className="icon-s ml-2" alt="" />
            </div>

        </section>
    )     
}

export default Footer