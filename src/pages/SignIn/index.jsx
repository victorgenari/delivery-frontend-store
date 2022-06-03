// Auth
import { useAuth } from "../../hooks/auth"

// Hooks
import { useState } from "react"

// Tag A and Navigate
import { Link, useNavigate } from "react-router-dom"

// Icons
import { FaLock, FaMailBulk } from "react-icons/fa"
import { GrFacebook, GrTwitter } from 'react-icons/gr'
import { RiInstagramFill } from 'react-icons/ri'
import { MdOutlineDeliveryDining } from 'react-icons/md'

// Css
import {
    BikeLine, LoginOrForgot, CompanyLogoBg, Container, Content,
    InputsBg, TitleDescriptions, DontHaveAccountOrCreateLogin,
    SocialMedias, OurPolicies
} from "./styles"

// Toasts
import { toast } from "react-toastify"


export function SignIn() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const { signIn } = useAuth()
    const navigate = useNavigate()

    async function handleSubmitLogin() {
        try {
            if (email && password) {
                await signIn(email, password)
                navigate('/')
            } else {
                throw new Error()
            }
        } catch (error) {
            toast.error('Usuário ou senha inválidos!')
        }
    }

    return (
        <Container>
            <Content>

                <CompanyLogoBg>
                    <Link to="/">
                        <MdOutlineDeliveryDining size={25} />
                        <i>DeliveryApp.</i>
                    </Link>
                    <BikeLine></BikeLine>
                </CompanyLogoBg>

                <TitleDescriptions>
                    <h1>Entrar</h1>
                    <p>Realize e acompanhe seus pedidos em nossa loja</p>
                </TitleDescriptions>

                <InputsBg>
                    <FaMailBulk />
                    <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </InputsBg>

                <InputsBg>
                    <FaLock />
                    <input type="password" name="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                </InputsBg>

                <LoginOrForgot>
                    <button type="submit" onClick={handleSubmitLogin}>Acessar</button>
                    <Link to="/">Esqueci minha senha</Link>
                </LoginOrForgot>

                <DontHaveAccountOrCreateLogin>
                    <p>Ainda não tem conta? <Link to="/signup">Registre-se</Link></p>
                </DontHaveAccountOrCreateLogin>

                <SocialMedias>
                    <a href="https://www.facebook.com" target="_blank noopener"><GrFacebook /></a>
                    <a href="https://www.instagram.com" target="_blank noopener"><RiInstagramFill size={21} /></a>
                    <a href="https://www.twitter.com" target="_blank noopener"><GrTwitter size={19} /></a>
                </SocialMedias>

                <OurPolicies>
                    <Link to="/">Company © 2022</Link>
                    <Link to="/">Sobre nós</Link>
                    <Link to="/">Acessibilidade</Link>
                    <Link to="/">Política de Privacidade</Link>
                    <Link to="/">Política de Cookies</Link>
                </OurPolicies>
            </Content>
        </Container>
    )
}