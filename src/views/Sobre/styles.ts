import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`

export const Presentation = styled.div`
    h1 {
        font-size: 60px;
        font-weight: bold;
        color: ${props => props.theme.colors.tertiary};
    }

    span {
        font-size: 25px;
        color: ${props => props.theme.colors.secondary};
        font-weight: 400;
    }
`

export const Information = styled.div`
    p {
        font-size: 25px;
        margin-top: 20px;
        color: ${props => props.theme.colors.secondary}
    }
    margin: 50px 0; 
`

export const ContainerContact = styled.div`
    width: 100%;
    h1 {
        font-size: 40px;
        margin: 50px 0;
    }
`
export const ContainerContactContent = styled.div`
    display: flex;
    justify-content: space-between;
`


export const Address = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    h2 {
        font-weight: 400;
        font-size: 25px;
        color: ${props => props.theme.colors.secondary};
        margin-bottom: 30px;
    }

    a {
        display: flex;
        align-items: center;
        
        text-decoration: none;
        
        font-size: 25px;
        font-weight: 400;
        color: ${props => props.theme.colors.secondary};
        margin: 3px 0;

        svg {
            margin-right: 10px;
        }
    }

`

export const Profile = styled.div`
    
    > img {
        width: 300px;
        height: 300px;
        
        border-radius: 50px 50px 50px 0;

        transform: translate(-1.5rem, -1.5ex);
    }
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 50px 50px 50px 0;
`