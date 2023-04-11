import styled from "styled-components"

export const ContentBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0;

    border: 1px solid ${props => props.theme.colors.gray};
    border-radius: 6px;
    padding: 30px;

    &:hover {
        transition: all .3s;
        transform: translateX(5px);
    }
`

export const InfoBox = styled.div`
    width: 60%;
    p {
        font-size: 22px;
        margin: 20px 0;
        margin-right: 40px;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.secondary};
        border-radius: 15px;
        border: 1px solid ${props => props.theme.colors.tertiary};
        
        padding: 5px 10px; 

        &:hover {
            transition: all .3s;
            background-color: ${props => props.theme.colors.tertiary};
            color: ${props => props.theme.colors.primary};
            //border: none;
        }
    }
`

export const InfoBoxTechStack = styled.div`
    display: flex;
    margin-bottom: 30px;
    h3 {
        font-weight: 500;
        font-size: 18px;
    }

    span {
        font-size: 16px;
        font-weight: 400;
    }

`
export const Test = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40%;
`
export const Image = styled.img`
    width: 100%;
    height: 70%;

`