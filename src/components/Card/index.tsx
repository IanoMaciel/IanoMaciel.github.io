import React from "react"
// styles 
import * as S from './styles'


interface ICardProps {
    title: string;
    description: string;
    url: string;
    image: string;
    tech: string;
}

export default function Card({ title, description, url, image, tech }: ICardProps) {
    return(
        <S.ContentBox>
            <S.InfoBox>
                <h2>{ title }</h2>
                <p>{ description }</p>

                <S.InfoBoxTechStack>
                    <h3>Tech Stack🛠️🧑🏻‍💻: <span>{tech}</span></h3>
                </S.InfoBoxTechStack>

                <a href={url}>Access the repository</a>
            </S.InfoBox>

            <S.Test>
                <S.Image src={image} alt="My Wallet Image"/>    
            </S.Test>            
            
        </S.ContentBox>
    )
}