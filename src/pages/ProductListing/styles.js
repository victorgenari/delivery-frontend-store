import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    place-content: center;

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

    padding: 1rem;
    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.1);
`

export const BgAllProducts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
`

export const PageInfos = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProductCard = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem;
    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.1);

    &:hover {
        transition: .3s;
        background: rgba(0, 0, 0, 0.2);
    }
`

export const ProductBtns = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-top: 2rem;

    button {
        display: flex;
        align-items: center;

        font-size: 1.5rem;
        padding: 0.2rem;
        border-radius: 0.5rem;
        background: transparent;
        transform: translateY(0);
        transition: .3s;

        &:hover {
            transition: .5s;
            transform: translateY(-6px);
        }
    }
`