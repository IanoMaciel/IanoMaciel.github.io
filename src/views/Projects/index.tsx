import React from "react"

import * as S from './styles'

// utils
import infoCard from "../../Utils/infoCard"

// components
import Card from "../../components/Card"

export default function Projects() {
    return(
        <S.Container>
            <h1>Projects</h1>
            {
                infoCard.map((item, index) => (
                    <Card
                        title={item.title}
                        description={item.description}
                        url={item.url}
                        image={item.image}
                        tech={item.tech}
                    />
                ))
            }
        </S.Container>
    )
}