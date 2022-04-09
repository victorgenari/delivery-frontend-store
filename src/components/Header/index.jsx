// CSS
import { Company, Container, Content, IconAndBtnLogin, Cart, MenuList } from "./styles";

import LogoImg from '../../assets/icons/logo.svg'

import { BsFillCartCheckFill } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'


export function Header() {
    return (
        <Container>
            <Content>

                <Company>
                    <img src={LogoImg} alt="Logo Empresa" />
                </Company>

                <MenuList>
                    <a href="/">Meus Pedidos</a>
                    <a href="/">Lanches</a>
                    <a href="/">Bebidas</a>
                    <a href="/">Suporte</a>
                </MenuList>

                <Cart>
                    <i><BsFillCartCheckFill /></i>
                </Cart>

                <IconAndBtnLogin>
                    <i><FiLogIn /></i>
                    <button>Entrar</button>
                </IconAndBtnLogin>

            </Content>
        </Container>
    )
}