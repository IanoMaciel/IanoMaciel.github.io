import React from "react"
// components
import Toogle from "../Toogle"
// styles
import * as S from './styles'

const MainHeader = () => {
    return(
        <S.Container>
            <S.Left>
                <h1>Bem vindo <span>ao meu portfólio</span></h1>
            </S.Left>
            <S.Right>
                <Toogle/>
            </S.Right>
        </S.Container>
    )
} 

export default MainHeader