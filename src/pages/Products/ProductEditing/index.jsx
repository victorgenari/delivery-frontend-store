import api from "../../../services/api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate, Link } from "react-router-dom"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { BsCheck2All } from "react-icons/bs"
import { Container, Content, Image } from "./styles"


export function ProductEditing() {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [product, setProduct] = useState()
    const [categoryId, setCategoryId] = useState()
    const [categories, setCategories] = useState()
    const [image, setImage] = useState()
    const [htmlEvent, setHtmlEvent] = useState()
    const [resultImage, setResultImage] = useState(false)
    const routeParams = useParams()
    const navigate = useNavigate()

    // Pegando/selecionando o produto pelo ID
    useEffect(() => {
        api.get(`products/${routeParams.id}`).then(response => {
            console.log(response)
            if (response.status === 200) {
                setProduct(response.data.data)
                setImage(response.data.data.picture)
            }
        }).catch(err => {
            console.log(err.request)
        })
    }, [routeParams.id])


    // Pegando a categoria
    useEffect(() => {
        api.get('/categories').then(response => {
            if (response.status === 200) {
                setCategories(response.data.docs)
            }
        })
    }, [])


    // Alterando os dados do produto
    async function changeFormData() {
        const productChanges = {
            name: name,
            description: description,
            price: price,
            categoryId: Number(categoryId)
        }

        await api.patch(`products/${routeParams.id}/update`, productChanges).then(response => {
            if (response.status === 200) {
                alert('Seu foi produto foi alterado.')
                navigate(`/products-listing`)
            }
        }).catch(err => {
            console.log(err.request)
        })
    }

    // Preview nova foto
    function previewImage(event) {
        if (event.target.files.length !== 0) {
            setImage(URL.createObjectURL(event.target.files[0]))
            setHtmlEvent(event)
        }
    }

    // Alterando/salvando a foto
    async function changeAvatar() {
        const data = new FormData()
        data.append('file', htmlEvent.target.files[0])

        await api.patch(`products/${routeParams.id}/change-avatar`, data)
            .then((response) => {
                if (response.status === 200) {
                    setResultImage(true)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }


    return (
        <Container>
            <Content>
                <div>
                    <h1>Atualizações</h1>
                    <p>Caso efetue alterações no produto, não esqueça de salvar.</p>
                    <Link to="/products-listing"><MdKeyboardArrowLeft /></Link>

                    <input type="text" name="name" defaultValue={product && product.name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" name="description" defaultValue={product && product.description} onChange={(e) => setDescription(e.target.value)} />
                    <input type="text" name="price" defaultValue={product && product.price} onChange={(e) => setPrice(e.target.value)} />

                    <select name="category" onChange={(e) => setCategoryId(e.target.value)}>
                        <option value="">Selecione uma categoria</option>
                        {categories && categories.map((category) => {
                            return (
                                <option key={category.id} value={category.id} selected={product && Number(category.id) === Number(product.category.id)}>
                                    {category.name}
                                </option>
                            )
                        })}
                    </select>

                    <div>
                        <button type="button" onClick={changeFormData}>Salvar</button>
                    </div>
                </div>

                <Image>
                    <img src={image} title="imagem Produto" alt="Imagem Produto" width={280} />
                    <label>Escolher arquivo
                        <input type="file" onChange={(event) => previewImage(event)} />
                    </label>

                    <div>
                        <button type="button" onClick={changeAvatar}><BsCheck2All /></button>
                        {resultImage && <p>Sua imagem foi alterada.</p>}
                    </div>
                </Image>
            </Content>
        </Container>
    )
}