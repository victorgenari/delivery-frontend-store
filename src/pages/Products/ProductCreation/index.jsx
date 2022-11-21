import api from "../../../services/api"
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { Container, Content } from './styles'


export function ProductCreation() {
    const navigate = useNavigate()

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [categoryId, setCatergoryId] = useState()
    const [categories, setCategories] = useState()

    useEffect(() => {
        api.get('/categories').then(response => {
            if (response.status === 200) {
                setCategories(response.data.docs)
            }
        })
    }, [])

    async function send() {
        const product = {
            name: name,
            description: description,
            price: price,
            categoryId: Number(categoryId)
        }

        await api.post('/products/create', product).then(response => {
            if (response.status === 201) {
                console.log(response)
                alert('Seu produto foi cadastrado.')
                navigate('/products/listing')
            }
        }).catch(err => {
            console.log(err.request)
        })
    }

    return (
        <Container>
            <Content>

                <h1>Criação de Produtos</h1>
                <p>Preencha os campos abaixo e salve.</p>
                <Link to="/products/listing"><MdKeyboardArrowLeft /></Link>

                <input type="text" name="name" placeholder="Produto" onChange={(e) => setName(e.target.value)} />
                <input type="text" name="description" placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} />
                <input type="text" name="price" placeholder="Valor" onChange={(e) => setPrice(e.target.value)} />

                <select name="category" onChange={(e) => setCatergoryId(e.target.value)}>
                    <option value="">Selecione uma categoria</option>

                    {categories && categories.map((category) => {
                        return (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        )
                    })}

                </select>

                <button type="button" onClick={send}>Salvar produto</button>

            </Content>
        </Container>
    )
}