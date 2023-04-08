import styled from 'styled-components'

export const Container = styled.div`
    grid-area: MH;
    background-color: rgba(255, 255, 255, 0.95);
    border-bottom: 1px solid #D9D9D9;

    display: flex;  
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    
`
export const Left = styled.div`
    h1 {
        font-weight: 700;
        font-size: 25px;
        color: #000;
    }

    h1 > span {
        font-weight: 400;
        font-size: 25px;
        color: #000
    }
    
`
export const Right = styled.div`
    
`