import React from "react"

import * as S from './styles'

const MainHeader = () => {
    return(
        <S.Container>
            <S.Left>
                <h1>Bem vindo <span>ao meu portfólio</span></h1>
            </S.Left>
            <S.Right>
                <h1>toogle</h1>
            </S.Right>
        </S.Container>
    )
} 

export default MainHeader