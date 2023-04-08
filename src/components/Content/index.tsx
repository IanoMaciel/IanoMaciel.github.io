import React from "react"

// styles
import * as S from './styles'

// pages
import Sobre from "../../views/Sobre"

interface IContentProps {
    children: React.ReactNode;
}

const Content = ({ children }: IContentProps) => {
    return(
        <S.Container>
            { children }
        </S.Container>
    )
} 

export default Content