import styled from 'styled-components'


export const BgEndPoint = styled.div`
    display: flex;
    flex-direction: column;

    margin: 1rem 0 3rem 0;

    h1 {
        margin: 0 0 0.5rem 0;
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
            transition: .3s;
            cursor: pointer;
            filter: brightness(0.8);
            border: 1px solid rgba(0, 0, 0, 0.1);

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