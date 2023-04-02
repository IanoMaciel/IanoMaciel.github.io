import React from "react"

// components
import Aside from "../Aside"
import Content from "../Content"
import MainHeader from "../MainHeader"
// styles
import * as S from "./styles"

const Layout = () => {
    return(
        <S.Container>
            <MainHeader/>
            <Aside/>
            <Content/>
        </S.Container>
    )
}

export default Layout