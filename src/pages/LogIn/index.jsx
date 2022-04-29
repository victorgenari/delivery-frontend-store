import { Link } from "react-router-dom"
import { FaUserAlt, FaLock, FaMailBulk } from "react-icons/fa"
import { GrFacebook, GrInstagram, GrTwitter } from 'react-icons/gr'
import { TiArrowBack } from 'react-icons/ti'
import { Container, Content, CreateAnAccountQuestion, EnterOrForgotPassword, InputsBg, ReturnArrow, SocialMedias } from "./styles"


export function LogIn() {
    return (
        <Container>
            <Content>

                <ReturnArrow>
                    <Link to="/" title="Tela inicial"><TiArrowBack /></Link>
                </ReturnArrow>

                <h1>Login</h1>

                <InputsBg>
                    <FaUserAlt color="#b1acac" /> <input type="text" placeholder="Nome" />
                </InputsBg>
                <InputsBg>
                    <FaMailBulk color="#b1acac" /> <input type="email" placeholder="Email" />
                </InputsBg>
                <InputsBg>
                    <FaLock color="#b1acac" /> <input type="password" placeholder="Senha" />
                </InputsBg>

                <EnterOrForgotPassword>
                    <button type="button">Entrar</button>
                    <Link to="/">Esqueci minha senha</Link>
                </EnterOrForgotPassword>

                <CreateAnAccountQuestion>
                    <p>Ainda não tem conta? <Link to="/">Crie uma conta</Link></p>
                </CreateAnAccountQuestion>
            </Content>

            <SocialMedias>
                <a href="https://www.facebook.com" target="_blank"><GrFacebook /></a>
                <a href="https://www.instagram.com" target="_blank"><GrInstagram /></a>
                <a href="https://www.twitter.com" target="_blank"><GrTwitter /></a>
            </SocialMedias>

        </Container>
    )
}