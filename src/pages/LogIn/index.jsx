import { Link } from "react-router-dom"
import { FaUserAlt, FaLock, FaMailBulk } from "react-icons/fa"
import { GrFacebook, GrInstagram, GrTwitter } from 'react-icons/gr'
import { Container, Content, SocialMedias } from "./styles"


export function LogIn() {
    return (
        <Container>
            <Content>
                <h1>LogIn</h1>

                <div>
                    <FaUserAlt color="#b1acac" /> <input type="text" placeholder="Nome" />
                </div>
                <div>
                    <FaMailBulk color="#b1acac" /> <input type="email" placeholder="Email" />
                </div>
                <div>
                    <FaLock color="#b1acac" /> <input type="password" placeholder="Senha" />
                </div>

                <section>
                    <button type="button">Entrar</button>
                    <Link to="/">Esqueci minha senha</Link>
                </section>

                <p>Ainda não tem conta? <Link to="/">Crie uma conta</Link></p>
            </Content>

            <SocialMedias>
                <a href="https://www.facebook.com" target="_blank"><GrFacebook /></a>
                <a href="https://www.instagram.com" target="_blank"><GrInstagram /></a>
                <a href="https://www.twitter.com" target="_blank"><GrTwitter /></a>
            </SocialMedias>
        </Container>
    )
}