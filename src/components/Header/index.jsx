// Hooks
import { useAuth } from "../../hooks/auth";
import { useSupportModal } from "../../hooks/supportmodal";

// Tag A
import { Link } from "react-router-dom";

// Icons
import { MdShoppingCart, MdHome, MdOutlineDeliveryDining } from 'react-icons/md'
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { BiSupport } from 'react-icons/bi'
import { FaHamburger, FaWineBottle } from 'react-icons/fa'

// CSS
import {
    Container, Content, Cart, MenuList, LoginButton, CompanyLogoBg, BikeLine, LogoutButton
} from "./styles";


export function Header() {
    const { user } = useAuth()
    const { signOut } = useAuth()
    const { OpenSupportModal } = useSupportModal()

    return (
        <Container>
            <Content>

                <CompanyLogoBg>
                    <MdOutlineDeliveryDining size={25} />
                    <BikeLine></BikeLine>
                    <i>DeliveryApp.</i>
                </CompanyLogoBg>

                <MenuList>
                    <Link to="/requests"><MdHome size={25} /> <span>Pedidos</span></Link>
                    <Link to={`/products/category/14`}><FaHamburger size={20} /> Lanches</Link>
                    <Link to={`/products/category/4`}><FaWineBottle size={20} /> <span>Bebidas</span></Link>
                    <button type='button' onClick={OpenSupportModal}><BiSupport size={25} /> Suporte</button>
                </MenuList>

                <Cart>
                    <MdShoppingCart size={25} />
                </Cart>

                {user ? (
                    <LogoutButton>
                        <button type="button" onClick={signOut}> <FiLogOut /> Sair</button>
                    </LogoutButton>
                ) : (
                    <LoginButton>
                        <Link to="/signin"><FiLogIn /> Entrar</Link>
                    </LoginButton>
                )}

            </Content>
        </Container>
    )
}