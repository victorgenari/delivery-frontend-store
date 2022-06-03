import styled from "styled-components";

export const FisrtContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1rem;
`

export const TitleCategoryFirstContainer = styled.div`
    width: 100%;
    max-width: 50rem;

    margin: 0 0 1rem 0;
`

export const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 0 2rem 0;
`

export const Content = styled.div`
    width: 100%;
    max-width: 50rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem 0;
    border-radius: 0.5rem;
    box-shadow: 2px 5px 5px 5px #A9A9A9;

    @media (max-width: 525px) {
        padding: 1rem;
    }
`

export const CategoryAndButtons = styled.div`
    width: 100%;
    max-width: 25rem;

    div {
        span {
            font-size: 1.5rem;
            font-weight: 600;
        }

        button {
            background: transparent;
            margin: 0.5rem 1rem 0 0;

            transition: .3s;
            transform: translateY(0);

            &:hover {
                transition: .5s;
                transform: translateY(-6px);
            }
        }
    }
`

export const CategoryImage = styled.div`
    width: 100%;
    max-width: 8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        max-width: 8rem;
        height: 11rem;
    }
`