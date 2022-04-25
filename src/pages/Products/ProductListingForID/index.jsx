import api from "../../../services/api"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { Container, Content, ProductCard, ProductDescriptions } from "./styles"

export function ProductListingForID() {
    const routeParams = useParams()
    const [product, setProduct] = useState()
    const [image, setImage] = useState()

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImFkbWluIjoxLCJpYXQiOjE2NTA0ODg5MzQsImV4cCI6MTY1MDU3NTMzNH0.y5ikH9LB-m0WL0RTSD2DiTqc9_huT6lBfBkAIat5wAk"
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    useEffect(() => {
        api.get(`products/${routeParams.id}`, config).then(response => {
            if (response.status === 200) {
                setProduct(response.data.data)
                setImage(response.data.data.picture)
            }
        })
    }, [])


    return (

        <Container>
            <Content>

                <h1>Listando produtos por ID</h1>
                <p>Informações do produto selecionado.</p>
                <Link to="/product-listing"><MdKeyboardArrowLeft /></Link>

                {product && (

                    <ProductCard>
                        <ProductDescriptions>
                            <div>
                                <p>Produto:</p>
                                <span>{product.name}</span>
                            </div>

                            <div>
                                <p>Descrição:</p>
                                <span>{product.description}</span>
                            </div>

                            <div>
                                <p>R$:</p>
                                <span>{product.price}</span>
                            </div>
                        </ProductDescriptions>

                        <div>
                            <img src={image} alt="Imagem Produto" width={250} />
                        </div>
                    </ProductCard>

                )}

            </Content>
        </Container>

    )
}