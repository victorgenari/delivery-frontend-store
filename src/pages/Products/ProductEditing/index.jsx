import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate, Link } from "react-router-dom"
// import Loader from "react-loader-spinner"

import api from "../../../services/api"

import { MdKeyboardArrowLeft } from "react-icons/md"

import { Container, Content } from "./styles"


export function ProductEditing() {
    // Estados criados para pegar tudo oq é digitado entre os inputs
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()

    // Estado armazenando o produto conforme seu ID (Produto aleatório)
    const [product, setProduct] = useState()

    // Forma para coletar o ID do item conforme passado na URL
    const routeParams = useParams()

    // Forma para enviar a navegação para outra URL
    const navigate = useNavigate()

    // Variável de controle pra mostrar o loading só quando estiver fazendo upload da imagem
    // const [loading, setLoading] = useState(false)

    // Guarda só a imagem pra gente conseguir fazer a função de preview da imagem
    const [image, setImage] = useState()

    // Guarda o valor do onChange do input de imagem
    const [htmlEvent, setHtmlEvent] = useState()

    // Variável de controle pra dizer que a imagem foi alterada
    const [avatarChanged, setAvatarChanged] = useState(false)

    // Variável de controle pra ativar o botão só quando existir uma imagem selecionada
    const [buttonDisabled, setButtonDisabled] = useState(false)

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

                // Guardando só o valor da imagem (url)
                setImage(response.data.data.picture)
            }
        }).catch(err => {
            console.log(err.request)
        })
    }, [routeParams])

    function previewImage(event) {
        // Se a gente não tiver esse if, podem ocorrer erros
        if (event.target.files.length !== 0) {
            // Setando o valor da imagem no estado já transformando em um link pra preview
            setImage(URL.createObjectURL(event.target.files[0]))

            // Guardando o valor do event, pois só conseguimos recuperar esse evento no onChange do input de imagem.
            // E como o onChange de lá chama essa função aqui, não iriamos conseguir guardar o valor do evento, por isso guardamos nesse estado
            setHtmlEvent(event)

            // Habilitando o botão de salvar (que irá chamar a função changeAvatar)
            setButtonDisabled(true)
        }
    }

    async function changeAvatar() {
        // Mostrando o loading na tela
        // setLoading(true)

        // Criando o payload (corpo/body) no formato multipart/form-data
        const data = new FormData()

        // Criando um campo dentro do payload
        data.append('file', htmlEvent.target.files[0])


        await api.patch(`products/change-avatar/${routeParams.id}`, data)
            .then((response) => {
                if (response.status === 200) {
                    // Setando variável de controle pra mostrar mensagem de imagem alterada
                    setAvatarChanged(true)
                    // Removendo o loader
                    // setLoading(false)
                }
            }).catch((err) => {
                console.log(err)
            })
    }

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
                <Link to="/product-listing"><MdKeyboardArrowLeft /></Link>

                {/* Inputs criados recuperando seus valores atuais, deixando alterá-los e criar novamente após o click em Salvar*/}
                <input type="text" name="name" defaultValue={product && product.name} onChange={(e) => setName(e.target.value)} />
                <input type="text" name="description" defaultValue={product && product.description} onChange={(e) => setDescription(e.target.value)} />
                <input type="text" name="price" defaultValue={product && product.price} onChange={(e) => setPrice(e.target.value)} />




                <img src={image} alt="Avatar" width={50} />

                {/* {loading && (
                    <Loader
                        width={50}
                        type="ThreeDots"
                        color="#000"
                    />
                )} */}

                {avatarChanged && (
                    <p>Imagem alterada</p>
                )}

                <input type="file" onChange={(event) => previewImage(event)} />

                {buttonDisabled && (
                    <button type="button" onClick={changeAvatar}>Salvar</button>
                )}






                {/* Botão passando a função EDITAR DADOS */}
                <button type="button" onClick={editData}>Salvar</button>

            </Content>
        </Container>
    )
}