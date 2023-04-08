import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    grid-area: AS;
    background-color: rgba(0, 0, 0, 0.3);
    border-right: 1px solid #D9D9D9;
    
`

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin: 80% 20px;
`

export const MenuItemLink = styled.a`
    display: flex;
    align-items: center;

    padding: 10px;

    font-weight: 400;
    font-size: 26px;
    color: #FFFFFF;
    
    text-decoration: none;
    transition: opacity .3s;

    &:hover {
        opacity: .7;
        background-color: rgba(255, 255, 255, 0.1);
        color: #FEBC2E;
        border-radius: 30px;
    }

    > svg {
        margin-right: 10px;
        font-size: 26px;
    } 
`