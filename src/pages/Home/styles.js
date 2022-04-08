import styled from "styled-components";

// Detalhes de entrega
export const Container = styled.div`
    max-width: 1000px;
    margin: 2rem auto;
`

export const BackgroundImgLanches = styled.div`
    width: 100%;

    img {
        width: 100%;
    }
`

export const IconAndInputSearch = styled.div`
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

export const DeliveryTimeValueDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: space-around;

    margin: 2rem 0;

    @media (max-width: 845px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const IconValue = styled.div`
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

export const IconDeliveryBtn = styled.div`
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

export const MoreDetailsBtn = styled.div`
    display: flex;
    justify-content: center;

    button {
        font-size: 1.1rem;
        font-weight: 600;
        color: red;
        background: transparent;
    }
`

