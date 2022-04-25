import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    place-content: center;

    width: 100vw;
    height: 100vh;

    padding: 1rem;

    a {
        display: flex;

        width: 2rem;
        font-size: 2rem;
        margin: 0 0 2rem 0;

        transition: .3s;
        transform: translateY(0);

        &:hover {
            transition: .5s;
            transform: translateY(-6px);
        }
    }
`

export const Content = styled.div`
    width: 100%;
    max-width: 1200px;

    display: grid;
    place-content: center;

    padding: 1rem;
    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.1);
`

export const ProductCard = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    width: 100%;
    max-width: 600px;

    padding: 1rem;
    border-radius: 0.5rem;

    background: rgba(0, 0, 0, 0.1);

    div {
        p {
            font-weight: 600;
        }

        img {
            border-radius: 0.5rem;
        }
    }
`

export const ProductDescriptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`