import { useSupportModal } from '../../hooks/supportmodal'

// Tag A
import { Link } from "react-router-dom"

// Icons
import { MdHome } from 'react-icons/md'
import { FaHamburger, FaWineBottle } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'

// CSS
import { Container, Content } from "./styles"


export function MenuMobile() {
    const { OpenSupportModal } = useSupportModal()

    return (
        <Container>
            <Content>
                <Link to="/requests">
                    <MdHome size={28} />
                    <span>Pedidos</span>
                </Link>

                <Link to="/products/category/14">
                    <FaHamburger size={23} />
                    <span>Lanches</span>
                </Link>

                <Link to="/products/category/4">
                    <FaWineBottle size={24} />
                    <span>Bebidas</span>
                </Link>

                <button type='button' onClick={OpenSupportModal}>
                    <BiSupport size={25} />
                    <span>Suporte</span>
                </button>
            </Content>
        </Container>
    )
}