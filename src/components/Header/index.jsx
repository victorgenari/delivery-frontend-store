import { Link } from "react-router-dom";
import LogoImg from '../../assets/icons/logo.svg'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import {
    Company, Container, Content,
    IconAndBtnLogin, Cart, MenuList
} from "./styles";


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
                    <Link to="/login">Entrar</Link>
                </IconAndBtnLogin>

            </Content>
        </Container>
    )
}