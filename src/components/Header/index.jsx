// Hooks
import { useAuth } from "../../hooks/auth"
import { useSupportModal } from "../../hooks/supportmodal"

// Tag A
import { Link } from "react-router-dom"

// Imgs
import ShoppingCart from '../../assets/images/Header/shopping-cart.png'

// Icons
import { MdHome, MdOutlineDeliveryDining } from 'react-icons/md'
import { FaHamburger, FaWineBottle } from 'react-icons/fa'
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { BiSupport } from 'react-icons/bi'

// CSS
import {
    Container, Content, CompanyLogoBg,
    BikeLine, MenuList, ShoppingCartAndButtons,
    MenuShoppingCart, LoginButtons
} from "./styles"


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

                <ShoppingCartAndButtons>
                    <MenuShoppingCart>
                        <div>
                            <span>Meu carrinho</span>
                            <span>0 item&#40;ns&#41;</span>
                        </div>
                        <img src={ShoppingCart} alt="Sacola de Compras" />
                    </MenuShoppingCart>

                    <LoginButtons>
                        {user ? (
                            <button type="button" onClick={signOut}> <FiLogOut /> Sair</button>
                        ) : (
                            <Link to="/signin" className="login"><FiLogIn /> Entrar</Link>
                        )}
                    </LoginButtons>
                </ShoppingCartAndButtons>

            </Content>
        </Container>
    )
}