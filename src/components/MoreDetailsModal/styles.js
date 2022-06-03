import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    top: 0;
    position: fixed;
    z-index: 100;

    background: rgba(0, 0, 0, 0.3);

    @media (max-width: 615px) {
        padding: 0 1rem;
    }
`

export const Content = styled.div`
    width: 100%;
    max-width: 40rem;

    padding: 1rem;
    border-radius: 0.5rem;

    background: #D3D3D3;
`

export const CloseButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;

    button {
        display: flex;

        font-size: 2rem;
        border-radius: 50%;

        color: #FF0000;
        background: transparent;
    }
`

export const ModalInfosStore = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    margin: 0 0 2.5rem 0;

    div {
        h3 {
            font-size: 1.2rem;
            font-weight: 600;
        }
    }
`

export const PaymentFormsBg = styled.div`
    display: flex;
    flex-direction: column;
`

export const PaymentCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    div {
        p {
            display: flex;
            align-items: center;
            gap: 0.3rem;

            img {
                width: 100%;
                max-width: 1.45rem;
            }
        }

        h1 {
            font-size: 1rem;
            font-weight: 600;
        }
    }

    @media (max-width: 595px) {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
`