import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    grid-area: AS;
    background-color: #fff;
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

    margin: 10px 0;

    padding: 5px 15px;

    font-weight: 400;
    font-size: 26px;
    color: #1E1E1E;
    
    text-decoration: none;
    transition: opacity .3s;

    &:hover {
        //opacity: .7;
        border: 2px solid #000;
        font-weight: 500;
        color: #000;
        border-radius: 30px;
    }

    > svg {
        margin-right: 10px;
        font-size: 26px;
    } 
`