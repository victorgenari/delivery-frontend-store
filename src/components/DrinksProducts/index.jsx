// API
import api from '../../services/api'

// Hooks
import { useEffect, useState } from 'react'

// Alteração de página
import { useNavigate } from "react-router-dom"

// Icons
import { MdAttachMoney } from 'react-icons/md'

// CSS
import { BgEndPoint, BgCards, BgCard, ProductInformations, ProductImage, Container, Content } from './styles'


export function DrinksProducts() {
    const [drinksProducts, setDrinksProducts] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/products').then(response => {
            if (response.status === 200) {
                console.log(response)
                setDrinksProducts(response.data.docs)
            }
        })
    }, [])

    function handleOpenProduct(id) {
        navigate(`/product-listing-for-id/${id}`)
    }

    return (
        <Container>
            <Content>
                <BgEndPoint>
                    <div>
                        <h1>Bebidas</h1>
                    </div>

                    <BgCards>
                        {drinksProducts && drinksProducts.map((drink) => {
                            return (
                                <div key={drink.id}>
                                    <BgCard key={drink.id} onClick={() => handleOpenProduct(drink.id)}>
                                        <ProductInformations>
                                            <h3>{drink.name}</h3>
                                            <p>{drink.description}</p>
                                            <h4>{drink.extras}</h4>
                                            <h5><MdAttachMoney size={20} /> {drink.price}</h5>
                                        </ProductInformations>

                                        <ProductImage>
                                            <img src={drink.picture} alt="Imagem Bebida" />
                                        </ProductImage>
                                    </BgCard>
                                </div>
                            )
                        })}
                    </BgCards>
                </BgEndPoint>
            </Content>
        </Container>
    )
}