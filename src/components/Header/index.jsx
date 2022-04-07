// CSS
import { BgLupaAndInput, Company, Container, Content, IconAndBtnLogin, LupaAndInput, LupaInputAndCart, MenuList } from "./styles";

import LogoImg from '../../assets/icons/logo.svg'

import { BiSearchAlt } from 'react-icons/bi'
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

                <LupaInputAndCart>

                    <BgLupaAndInput>
                        <LupaAndInput>
                            <i><BiSearchAlt /></i>
                            <input type="search" placeholder="Pesquise um produto" />
                        </LupaAndInput>
                    </BgLupaAndInput>

                    <i><BsFillCartCheckFill /></i>

                </LupaInputAndCart>

                <IconAndBtnLogin>
                    <i><FiLogIn /></i>
                    <button>Entrar</button>
                </IconAndBtnLogin>

            </Content>
        </Container>
    )
}