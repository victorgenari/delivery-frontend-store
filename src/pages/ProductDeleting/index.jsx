// Tela criada somente para ver como podemos deletar um Produto pelo ID particular (Deletando ID FIXO)
// Tela criada somente para ver como podemos deletar um Produto pelo ID particular (Deletando ID FIXO)
// Tela criada somente para ver como podemos deletar um Produto pelo ID particular (Deletando ID FIXO)
// Tela criada somente para ver como podemos deletar um Produto pelo ID particular (Deletando ID FIXO)
// Tela criada somente para ver como podemos deletar um Produto pelo ID particular (Deletando ID FIXO)
import api from "../../services/api"

export function ProductDeleting() {

    async function deleteProduct() {

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsImFkbWluIjoxLCJpYXQiOjE2NDk3OTI4OTgsImV4cCI6MTY0OTg3OTI5OH0.RQFHflwwhcXS3a1XgEXKMpGSNR-Q6NKy36XIcH9nVUE"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }

        await api.delete('/products/84', config).then(response => {
            if (response.status === 200) {
                alert('Produto deletado')
            }
        }).catch(err => {
            console.log(err.request)
        })

    }

    return (
        <>
            <h1>Deletando produtos</h1>
            <button type="button" onClick={deleteProduct}>Deletar</button>
        </>
    )
}