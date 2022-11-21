import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import api from "../../../services/api"
import { RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri"
import { MdOutlineRemoveRedEye, MdAttachMoney } from "react-icons/md"
import { MdKeyboardArrowLeft } from "react-icons/md"
import {
    Container, Content, ProductBtns, ProductCard,
    PageInfos, BgAllProducts, ProductDescriptions, BgProductImg,
    BgTitlesAndButton, TitleButtons
} from "./styles"


export function ProductListing() {
    const [productRemoved, setProductRemoved] = useState(false)
    const [allProducts, setAllProducts] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/products').then(response => {
            if (response.status === 200) {
                setAllProducts(response.data.docs)
            }
        })
    }, [productRemoved])

    function handleShow(id) {
        navigate(`/product/listing/for/id/${id}`)
    }

    function handleEdit(id) {
        navigate(`/product/editing/${id}`)
    }

    async function handleDelete(id) {

        await api.delete(`/products/${id}/delete`).then(response => {
            if (response.status === 200) {
                alert('O produto selecionado foi deletado.')
                setProductRemoved(true)
            }
        }).catch(err => {
            console.log(err.request)
        })
    }

    function createNewProduct() {
        navigate('/products/creation')
    }


    return (
        <Container>
            <Content>

                <BgTitlesAndButton>
                    <PageInfos>
                        <h1>Produtos</h1>
                        <p>Nesta pagína irá aparecer todos os produtos cadastrados.</p>
                    </PageInfos>

                    <TitleButtons>
                        <Link to="/"><MdKeyboardArrowLeft /></Link>
                        <button type="button" onClick={createNewProduct}>Novo produto</button>
                    </TitleButtons>
                </BgTitlesAndButton>

                <BgAllProducts>
                    {allProducts && allProducts.map((p) => {
                        return (
                            <div key={p.id}>
                                <ProductCard>

                                    <div>
                                        <ProductDescriptions>
                                            <span>{p.name}</span>
                                            <p>{p.description}</p>
                                            <h4><MdAttachMoney size={20} />{p.price}</h4>
                                        </ProductDescriptions>

                                        <ProductBtns>
                                            <button type="button" onClick={() => handleShow(p.id)}><MdOutlineRemoveRedEye title="Visualizar" /></button>
                                            <button type="button" onClick={() => handleEdit(p.id)}><RiEdit2Line title="Editar" /></button>
                                            <button type="button" onClick={() => handleDelete(p.id)}><RiDeleteBin2Line title="Excluir" /></button>
                                        </ProductBtns>
                                    </div>

                                    <BgProductImg>
                                        <img src={p.picture} alt="Imagem Produto" width={160} height={160} />
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