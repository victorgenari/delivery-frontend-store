// React
import { useState } from 'react'

// Tag A - Navegação
import { Link, useNavigate } from 'react-router-dom'

// Toast
import { toast } from 'react-toastify'

// API
import api from '../../services/api'

// Icons
import { FaLock, FaMailBulk, FaUserAlt } from "react-icons/fa"
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { RiWhatsappFill } from 'react-icons/ri'
import { GrFacebook, GrTwitter } from 'react-icons/gr'
import { RiInstagramFill } from 'react-icons/ri'

// CSS
import {
    AcceptPolicies,
    BikeLine,
    ButtonBackground, CompanyLogoBg, Container, Content,
    Divider, DividerBackground, OurPolicies,
    InputsBg,
    OnlyFormData, SocialMedias, AlreadyRegistered
} from './styles'


export function SignUp() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [whatsapp, setWhatsapp] = useState()

    const navigate = useNavigate()

    const newuser = {
        name: name,
        email: email,
        password: password,
        whatsapp: whatsapp
    }

    async function handleNewUser() {
        await api.post('signup', newuser).then(response => {
            if (response.status === 201) {
                toast.success('O usuário foi cadastrado!')
                navigate('/signin')
            }
        }).catch(err => {
            console.log(err.request)
        })
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

                <OnlyFormData>

                    <h1>Junte-se hoje à DeliveryApp.</h1>
                    <p>É muito fácil criar seu cadastro. Realize seus pedidos, acompanhe e aproveite.</p>

                    <InputsBg>
                        <FaUserAlt /> <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
                    </InputsBg>
                    <InputsBg>
                        <FaMailBulk /> <input type="email" placeholder="Conta de email" onChange={(e) => setEmail(e.target.value)} />
                    </InputsBg>
                    <InputsBg>
                        <FaLock /> <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                    </InputsBg>
                    <InputsBg>
                        <RiWhatsappFill size={20} /> <input type="text" placeholder="WhatsApp" onChange={(e) => setWhatsapp(e.target.value)} />
                    </InputsBg>

                    <AcceptPolicies>
                        <p>Ao clicar em Aceite e Registre-me, você aceita, a <Link to="/">Política de Privacidade</Link> e a <Link to="/">Política de Cookies</Link> da Delivery App.</p>
                    </AcceptPolicies>

                    <ButtonBackground>
                        <button type="button" onClick={handleNewUser}>Aceite e Registre-me</button>
                    </ButtonBackground>

                    <DividerBackground>
                        <Divider></Divider>
                        <span>OU</span>
                        <Divider></Divider>
                    </DividerBackground>

                    <AlreadyRegistered>
                        <p>Já se cadastrou? <Link to="/signin">Entre</Link></p>
                    </AlreadyRegistered>
                </OnlyFormData>

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
        </Container >
    )
}