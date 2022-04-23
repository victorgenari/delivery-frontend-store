// Hooks
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

// API
import api from "../../../services/api"

import { RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri"
import { MdOutlineRemoveRedEye } from "react-icons/md"

// Icons
import { MdKeyboardArrowLeft } from "react-icons/md"

// CSS
import { Container, Content, ProductBtns, ProductCard, PageInfos, BgAllProducts, ProductDescriptions, BgProductImg } from "./styles"


export function ProductListing() {
    // Forma de mover a navegação para outra rota (window)
    const navigate = useNavigate();

    // Estado para recarregar a mesma tela (Lista de Produtos)
    const [productRemoved, setProductRemoved] = useState(false)

    // Estado armazenando todos os produtos
    const [allProducts, setAllProducts] = useState()

    // Token-Config de autorização para acessar
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImFkbWluIjoxLCJpYXQiOjE2NTA2MzEzMzAsImV4cCI6MTY1MDcxNzczMH0.B76KpqbfBRdMseuD75wxBGDaxC_EY6WLjoqXn5MlQ4c"
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    // UseEffect criado trazendo todos produtos e armazendo no estado
    // Um estado sendo monitorado para recarregar a mesma tela novamente e mostrar o produto deltado já fora da tela
    useEffect(() => {
        api.get('/products', config).then(response => {
            if (response.status === 200) {
                setAllProducts(response.data.docs)
            }
        })
    }, [productRemoved])

    // Função e forma para listar qualquer produto pelo ID
    function handleShow(id) {
        navigate(`/product-listing-for-ID/${id}`)
    }

    // Função e forma para enviar para a tela de editar produtos passando o ID
    function handleEdit(id) {
        navigate(`/product-editing/${id}`)
    }

    // Função assincrona/await criada passando o id
    // Sempre que houver chamadas pra API dentro da função, ela precisa ser async/await
    async function handleDelete(id) {

        await api.delete(`/products/${id}`, config).then(response => {
            if (response.status === 200) {
                alert('O produto selecionado foi deletado.')
                // Estado monitorado para recarregar a mesma tela quando algo for deletado
                setProductRemoved(true)
            }
        }).catch(err => {
            console.log(err.request)
        })

    }

    return (
        <Container>
            <Content>

                <PageInfos>
                    <h1>Produtos</h1>
                    <p>Nesta pagína irá aparecer todos os produtos cadastrados.</p>
                    <Link to="/"><MdKeyboardArrowLeft /></Link>
                </PageInfos>

                <BgAllProducts>
                    {/* Se o allProducts existir, ele gera o map trazendo os produtos (p) dentro da div */}
                    {allProducts && allProducts.map((p) => {
                        return (
                            <div key={p.id}>
                                <ProductCard>

                                    <div>
                                        <ProductDescriptions>
                                            <span>Produto: {p.name}</span>
                                            <span>Descrição: {p.description}</span>
                                            <span>Preço: {p.price}</span>
                                            <span>Categoria: {p.categoryId}</span>
                                        </ProductDescriptions>

                                        <ProductBtns>
                                            <button type="button" onClick={() => handleShow(p.id)}><MdOutlineRemoveRedEye title="Visualizar" /></button>
                                            <button type="button" onClick={() => handleEdit(p.id)}><RiEdit2Line title="Editar" /></button>
                                            <button type="button" onClick={() => handleDelete(p.id)}><RiDeleteBin2Line title="Excluir" /></button>
                                        </ProductBtns>
                                    </div>


                                    <BgProductImg>
                                        <img src={p.picture} alt="Imagem Produto" width={160} />
                                    </BgProductImg>

                                </ProductCard>
                            </div>
                        )
                    })}
                </BgAllProducts>

            </Content>
        </Container>
    )
}