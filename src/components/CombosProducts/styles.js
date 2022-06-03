import styled from 'styled-components'


export const BgEndPoint = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 0 3rem 0;
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
            width: 10rem;
            height: 8rem;

            border-radius: 0.5rem;
        }
    }

`