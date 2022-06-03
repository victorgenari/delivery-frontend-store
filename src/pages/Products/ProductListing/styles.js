import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: grid;
    place-content: center;

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

    padding: 1rem;
    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.1);
`

export const BgTitlesAndButton = styled.div`
    display: flex;
    flex-direction: column;
`

export const PageInfos = styled.div`
    display: flex;
    flex-direction: column;
`

export const TitleButtons = styled.div`
    display: flex;
    justify-content: space-between;

    margin: 1rem 0 2rem 0;

    button {
        width: 100%;
        max-width: 15rem;

        position: relative;
        overflow: hidden;
        z-index: 0;

        font-size: 1.1rem;
        padding: 0.5rem 0;
        border-radius: 0.5rem;

        ::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 0%;
            height: 100%;
            background: rgba(0, 0, 0, 0.1);
            transition: .3s linear;
            z-index: -1;
        }

        &:hover {
            filter: brightness(0.8);
            transition: .3s;

            ::before {
                width: 100%;
                left: 0;
            }
        }
    }
`

export const BgAllProducts = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 830px) {
        grid-template-columns: 1fr;
    }
`

export const ProductCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    padding: 1rem;
    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.1);

    &:hover {
        transition: .3s;
        background: rgba(0, 0, 0, 0.2);
    }
`

export const ProductDescriptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    span {
        font-weight: 600;
    }

    h4 {
        display: flex;
        align-items: center;
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

export const BgProductImg = styled.div`
    display: grid;
    place-content: center;

    img {
        border-radius: 0.5rem;
    }
`