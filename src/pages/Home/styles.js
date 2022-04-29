import styled from "styled-components";

export const Container = styled.div`
    max-width: 1000px;
    margin: 2rem auto;

    padding: 1rem;
`

export const BgImgTop = styled.div`
    width: 100%;

    img {
        width: 100%;
    }
`

export const InputSearch = styled.div`
    display: flex;
    gap: 0.3rem;

    width: 100%;

    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 2px solid #FAFAFA;

    i {
        margin-top: 10px;
    }

    input {
        width: 100%;
        font-size: 1.5rem;
        background: transparent;
        border-bottom: 1px solid #000000;
    }
`

// Info entregas
export const DetailsDelivery = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: space-around;

    margin: 2rem 0 0 0;

    @media (max-width: 845px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const InfoValue = styled.div`
    display: flex;
    gap: 0.3rem;
`

export const TimeDelivery = styled.div`
    display: flex;
    flex-direction: column;

    text-align: center;
    font-size: 0.9rem;
    padding: 0.6rem;
`

export const IconAndTime = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.3rem;

    i {
        margin-top: 2px;
    }
`

export const TypeDelivery = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    padding: 0.6rem;
    gap: 0.2rem;

    i {
        font-size: 1.3rem;
        margin-top: 4px;
    }

    button {
        font-size: 1.3rem;
        margin-top: 5px;
        background: transparent;
        color: red;
    }
`

export const MoreDetails = styled.div`
    display: flex;
    justify-content: center;

    button {
        font-size: 1.1rem;
        font-weight: 600;
        color: red;
        background: transparent;
    }
`

// Highlights
export const BgEndPoint = styled.div`
    display: flex;
    flex-direction: column;

    div {
        h1 {
            margin: 2rem 0 1rem 0;
        }
    }
`

export const BgCardsHighlights = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 750px) {
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



// All End Points
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
    gap: 1rem;

    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #FAFAFA;

    @media (max-width: 750px) {
        justify-content: space-between;
    }

    &:hover {
        filter: brightness(0.8);
        transition: .3s;
        border: 1px solid #A9A9A9;
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
            width: 12rem;
            height: 8rem;

            border-radius: 0.5rem;
        }
    }

`