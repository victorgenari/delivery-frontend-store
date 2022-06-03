import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    padding: 0 1rem;

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
    display: grid;
    padding: 1rem;

    width: 100vw;
    max-width: 1000px;

    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.1);

    input, select {
        font-size: 1.2rem;
        padding: 0.5rem;
        margin: 0 0 0.8rem 0;
        border-radius: 0.5rem;

        background: #A9A9A9;
    }

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