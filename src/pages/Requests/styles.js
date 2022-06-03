import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    @media (max-width: 772px) {
        height: 0%;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: 100%;
    max-width: 60rem;

    padding: 1rem;

    margin: 10rem 0 2rem 0;
`

export const TitleAndBackToHome = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        padding: 0.2rem 1rem;
        border-radius: 0.5rem;
        border: 1px solid #FAFAFA;

        &:hover {
            transition: .2s;
            box-shadow: 1px 2px 2px 2px #A9A9A9;
        }
    }
`

export const RequestCardsBackground = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    width: 100%;

    @media (max-width: 772px) {
        grid-template-columns: 1fr;
    }
`

export const RequestCard = styled.div`
    width: 100%;

    padding: 1rem;
    border-radius: 0.5rem;

    box-shadow: 2px 3px 3px 3px #A9A9A9;
`

export const Date = styled.div`
    margin: 0 0 1rem 0;

    span {
        font-weight: 600;
    }
`

export const RequestIdAndDeliveryTipe = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const RequestStatus = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin: 0.2rem 0;

    span {
        font-size: 1.1rem;
        font-weight: 600;
    }
`

export const ValueAndDetailBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
    }
`