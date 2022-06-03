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

    padding: 1rem 1rem 3rem 1rem;
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

export const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

export const ImageAndInfosBg = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 3rem;

    img {
        width: 100%;
        max-width: 18rem;
        height: 25rem;

        padding: 0 1rem 0 0;
        margin: 0 0 0 1rem;
        border-radius: 0.5rem;

        box-shadow: 3px 5px 5px 5px rgba(0, 0, 0, 0.2);

        @media (max-width: 545px) {
            height: 18rem;
            margin: 0;
        }
    }

    @media (max-width: 545px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`

export const InfosBg = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h3 {
        font-weight: 600;
    }
`

export const AppDownload = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    div {
        display: flex;
        align-items: center;
    }

    span {
        display: flex;
        align-items: center;
    }
`

export const TelephoneNumbers = styled.div`
    display: flex;
    flex-direction: column;
`