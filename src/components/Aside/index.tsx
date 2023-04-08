import React from "react"

// styles
import * as S from './styles'

// icons 
import {
    MdPerson,
    MdOutlineCode,
    MdOutlineCoPresent
} from 'react-icons/md'

const Aside = () =>{
    return(
        <S.Container>
            <S.MenuContainer>
                <S.MenuItemLink href="#"><MdPerson/>Sobre</S.MenuItemLink>
                <S.MenuItemLink href="#"><MdOutlineCode/>Projetos</S.MenuItemLink>
                <S.MenuItemLink href="#"><MdOutlineCoPresent/>Palestras</S.MenuItemLink>
            </S.MenuContainer>
        </S.Container>
    )
}

export default Aside