import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    display: none;

    bottom: 0;
    position: fixed;
    z-index: 100;

    border-top: 2px solid #A9A9A9;
    background: #FAFAFA;

    @media (max-width: 785px) {
        display: flex;
    }
`

export const Content = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    a, button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 0.5rem 0;
        background: transparent;

        span {
            font-weight: 600;
        }

        &:nth-child(1), :nth-child(2), :nth-child(3), :nth-child(4) {
            color: #4F4F4F;

            &:hover {
            color: #000000;
        }
        }
    }
`