import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate, Link } from "react-router-dom"
import api from "../../../services/api"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { BsCheck2All } from "react-icons/bs"
import { Container, Content, Image, Loading } from "./styles"


export function ProductEditing() {
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [product, setProduct] = useState()
    const routeParams = useParams()
    const navigate = useNavigate()

    const productChanges = {
        name: name,
        description: description,
        price: price,
    }

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImFkbWluIjoxLCJpYXQiOjE2NTA4MzUwMTcsImV4cCI6MTY1MDkyMTQxN30.cQ5pFmIkuUUmBnj2diSfrNwYMoTZeAq2QIrBDpbfEHk"
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
        }).catch(err => {
            console.log(err.request)
        })
    }, [])

    async function changeFormData() {
        await api.patch(`products/${routeParams.id}`, productChanges, config).then(response => {
            if (response.status === 200) {
                alert('Seu foi produto foi alterado.')
                navigate(`/product-listing`)
            }
        }).catch(err => {
            console.log(err.request)
        })
    }






    const [image, setImage] = useState()
    const [htmlEvent, setHtmlEvent] = useState()
    // const [loading, setLoading] = useState(true)
    const [resultImage, setResultImage] = useState(false)


    function previewImage(event) {
        if (event.target.files.length !== 0) {
            setImage(URL.createObjectURL(event.target.files[0]))
            setHtmlEvent(event)
        }
    }

    async function changeAvatar() {
        const data = new FormData()
        data.append('file', htmlEvent.target.files[0])

        await api.patch(`products/change-avatar/${routeParams.id}`, data, config)
            .then((response) => {
                if (response.status === 200) {
                    // setLoading(true)
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
                    <Link to="/product-listing"><MdKeyboardArrowLeft /></Link>

                    <input type="text" name="name" defaultValue={product && product.name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" name="description" defaultValue={product && product.description} onChange={(e) => setDescription(e.target.value)} />
                    <input type="text" name="price" defaultValue={product && product.price} onChange={(e) => setPrice(e.target.value)} />

                    <button type="button" onClick={changeFormData}>Salvar</button>
                </div>

                <Image>
                    <img src={image} title="imagem Produto" alt="Imagem Produto" width={280} />
                    <input type="file" onChange={(event) => previewImage(event)} />

                    <div>
                        <button type="button" onClick={changeAvatar}><BsCheck2All /></button>
                        {/* {loading && <Loading></Loading>} */}
                        {resultImage && <p>Sua imagem foi alterada.</p>}
                    </div>
                </Image>
            </Content>
        </Container>
    )
}