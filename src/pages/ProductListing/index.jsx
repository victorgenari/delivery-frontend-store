import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

// Importando a API
import api from "../../services/api"


export function ProductListing() {
    // Forma de mover a navegação para outra rota (window)
    const navigate = useNavigate();

    // Estado para recarregar a mesma tela (Lista de Produtos)
    const [productRemoved, setProductRemoved] = useState(false);

    // Estado armazenando todos os produtos
    const [allProducts, setAllProducts] = useState();

    // Token-Config de autorização para acessar
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImFkbWluIjoxLCJpYXQiOjE2NDk4ODA4ODQsImV4cCI6MTY0OTk2NzI4NH0.eblAQBdhRwmagKmcFmaPgmlPRRYwwmAIuc2zqzFSNCM"
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
                alert('Produto deletado')
                // Estado monitorado para recarregar a mesma tela quando algo for deletado
                setProductRemoved(true)
            }
        }).catch(err => {
            console.log(err.request)
        })

    }

    return (
        <>

            <h1>Listando produtos</h1>

            {/* Se o allProducts existir, ele gera o map trazendo os produtos (p) dentro da div */}
            {allProducts && allProducts.map((p) => {
                return (
                    <div key={p.id}>
                        <p>{p.name}</p>
                        <p>{p.description}</p>
                        <p>{p.price}</p>
                        <p>{p.categoryId}</p>
                        <button type="button" onClick={() => handleShow(p.id)}>Ver</button>
                        <button type="button" onClick={() => handleEdit(p.id)}>Editar</button>
                        <button type="button" onClick={() => handleDelete(p.id)}>Excluir</button>
                        <br />
                    </div>
                )
            })}

        </>
    )
}