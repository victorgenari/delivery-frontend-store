import styled from "styled-components";

export const Container = styled.div`
    max-width: 1100px;
    margin: 5.5rem auto 0 auto;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const BgImgTop = styled.div`
    width: 100%;
    max-width: 1100px;

    img {
        width: 100%;
    }
`

export const BgEndPoint = styled.div`
    display: flex;
    flex-direction: column;

    div {
        h1 {
            margin: 3rem 0 0.5rem 0;
        }
    }
`

export const BgCardsHighlights = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 650px) {
        grid-template-columns: 1fr;
    }

    div {
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #FAFAFA;

        &:hover {
            border: 1px solid #A9A9A9;
            transition: .3s;

            img {
                filter: brightness(0.9);
                transition: .3s;
            }
        }

        img {
            width: 100%;
            height: 12rem;
        }

        h3 {
            font-weight: 600;
            margin: 0 0 0.6rem 0;
        }

        p {
            margin: 0 0 0.8rem 0;
        }

        h4 {
            font-size: 0.9rem;
        }

        h5 {
            display: flex;
            align-items: center;
            font-size: 1rem;
        }
    }
`

export const BgCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`

export const BgCard = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #FAFAFA;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.05);

    &:hover {
        filter: brightness(0.8);
        transition: .3s;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 750px) {
        justify-content: space-between;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3 {
            font-weight: 600;
        }

        p {
            font-size: 0.9rem;
            margin: 0.8rem 0 0.8rem 0;
        }

        h4 {
            font-size: 0.9rem;
        }

        h5 {
            display: flex;
            align-items: center;

            font-size: 1rem;
            margin-top: -0.3rem;
        }

        img {
            width: 10rem;
            height: 8rem;

            border-radius: 0.5rem;
        }
    }

`

export const ProductInformations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
        font-weight: 600;
    }

    p {
        font-size: 0.9rem;
        margin: 0.8rem 0 0.8rem 0;
    }

    h4 {
        font-size: 0.9rem;
    }

    h5 {
        display: flex;
        align-items: center;

        font-size: 1rem;
        margin-top: -0.3rem;
    }

    button {
        display: flex;

        padding: 0.5rem;
        border-radius: 50%;

        
        border: 1px solid #FAFAFA;
        background: transparent;
    }

    div {
        display: flex;
        gap: 1rem;
    }
`

export const ProductImage = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 8rem;
        height: 8rem;

        border-radius: 0.5rem;
    }
`