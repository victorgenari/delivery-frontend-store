// Hooks
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

// Chamada para a API
import api from "../../services/api"

// Icons
import { MdKeyboardArrowLeft } from "react-icons/md"

// CSS
import { Container, Content } from "./styles"


export function ProductEditing() {
    // Estados criados para pegar tudo oq é digitado entre os inputs
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();

    // Estado armazenando o produto conforme seu ID (Produto aleatório)
    const [product, setProduct] = useState()

    // Forma para coletar o ID do item conforme passado na URL
    const routeParams = useParams();

    // Forma para enviar a navegação para outra URL
    const navigate = useNavigate();

    // Informando oq é cada campo dos inputs com base nos estados acima (eles estão sendo passados dentro dos nomes abaixo)
    const productChanges = {
        name: name,
        description: description,
        price: price,
    }

    // Token de autorização para conseguir realizar ações na tela
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImFkbWluIjoxLCJpYXQiOjE2NTA0ODg5MzQsImV4cCI6MTY1MDU3NTMzNH0.y5ikH9LB-m0WL0RTSD2DiTqc9_huT6lBfBkAIat5wAk"
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    // UseEffect para entrar na rota produtos, pegar o ID na URL e armazenando no setProduct
    useEffect(() => {
        api.get(`products/${routeParams.id}`, config).then(response => {
            if (response.status === 200) {
                // Passa a ser apenas product com o produto pelo seu ID selecionado
                setProduct(response.data.data)
            }
        })
    }, [])

    // Sempre que uma função efetuar chamada para a API dentro dela, precisa ser async/await
    // Função para editar produtos conforme o ID passando na URL
    async function editData() {
        await api.patch(`products/${routeParams.id}`, productChanges, config).then(response => {
            // se a resposta for OK, ele irá chamar o navigate para outra URL
            if (response.status === 200) {
                alert('Seu foi produto foi alterado.')
                navigate(`/product-listing`)
            }
        }).catch(err => {
            console.log(err.request)
        })

    }

    return (

        <Container>
            <Content>
                <h1>Atualizações</h1>
                <p>Caso efetue alterações no produto, não esqueça de salvar.</p>
                <a href="/product-listing"><MdKeyboardArrowLeft /></a>

                {/* Inputs criados recuperando seus valores atuais, deixando alterá-los e criar novamente após o click em Salvar*/}
                <input type="text" name="name" defaultValue={product && product.name} onChange={(e) => setName(e.target.value)} />
                <input type="text" name="description" defaultValue={product && product.description} onChange={(e) => setDescription(e.target.value)} />
                <input type="text" name="price" defaultValue={product && product.price} onChange={(e) => setPrice(e.target.value)} />

                {/* Botão passando a função EDITAR DADOS */}
                <button type="button" onClick={editData}>Salvar</button>
            </Content>
        </Container>
    )
}