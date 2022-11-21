// API
import api from "../../../services/api"

// Tag A / Use ID
import { Link, useParams } from "react-router-dom"

// Hooks
import { useEffect, useState } from "react"

// Icons
import { MdKeyboardArrowLeft, MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart } from 'react-icons/md'

// CSS
import { AddOrRemoveToCart, Container, Content, ProductCard, ProductDescriptions, ProductImage } from "./styles"


export function ProductListingForID() {
    const routeParams = useParams()
    const [product, setProduct] = useState()
    const [image, setImage] = useState()

    useEffect(() => {
        api.get(`products/${routeParams.id}`).then(response => {
            if (response.status === 200) {
                setProduct(response.data.data)
                setImage(response.data.data.picture)
            }
        })
    }, [routeParams.id])


    return (

        <Container>
            <Content>

                {product && (
                    <>
                        <div>
                            <h1>{product.name}</h1>
                            <Link to="/"><MdKeyboardArrowLeft /></Link>
                        </div>

                        <ProductCard>
                            <ProductDescriptions>
                                <p>Informações do produto selecionado</p>

                                <div>
                                    <h4>Produto:</h4>
                                    <span>{product.name}</span>
                                </div>

                                <div>
                                    <h4>Descrição:</h4>
                                    <span>{product.description}</span>
                                </div>

                                <div>
                                    <h4>R$:</h4>
                                    <span>{product.price}</span>
                                </div>

                                <AddOrRemoveToCart>
                                    <button
                                        type="button"
                                        title='Adicionar ao Carrinho'
                                    >
                                        <MdOutlineAddShoppingCart size={20} />
                                    </button>
                                    <button
                                        type="button"
                                        title='Remover do Carrinho'
                                    >
                                        <MdOutlineRemoveShoppingCart size={20} />
                                    </button>
                                </AddOrRemoveToCart>
                            </ProductDescriptions>

                            <ProductImage>
                                <img src={image} alt="Imagem Produto" width={250} />
                            </ProductImage>
                        </ProductCard>
                    </>

                )}

            </Content>
        </Container>

    )
}