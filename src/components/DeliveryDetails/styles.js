import styled from 'styled-components'


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

    font-size: 0.9rem;
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
    justify-content: center;
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