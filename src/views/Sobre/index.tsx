import React from "react"

// styles
import * as S from "./styles"

// icons and profile
import { GrLinkedin,GrGithub, GrInstagram, GrMailOption }from 'react-icons/gr'
import ProfileImg from '../../assets/profile.jpeg'

const Sobre = () => {
    return(
        <S.Container>
            <S.Presentation>
                <h1>Hello! I'm Iano Maciel :)</h1>
                <span>Software Developer | Graduating in Software Engineering</span>
            </S.Presentation>
            
            <S.Information>
                <p>
                    I am a Software Engineer graduated from the Federal University of Amazonas (UFAM/ICET) with a keen interest in web and mobile software development. I have experience in modern JavaScript, NodeJs, TypeScript, React, React Native, Rest API, Git, and GitHub.
                </p>
                
                <p>
                    In 2022, I worked as a scholarship holder in the Super Project, a Research, Development, and Innovation (RD&I) project carried out in partnership between UFAM and Samsung. During the project, I conducted research in the area of Software Engineering, specifically in Software Configuration Management.
                </p>
                
                <p>
                    Currently, I work as a web software developer at 7FACILE, using programming languages such as Java, PHP, JavaScript, and React Native.
                </p>

                <p>
                    My passion for software development is present from the conception of the idea to the delivery of the final product. I am concerned with the entire project scope, from data modeling and system architecture to back-end and front-end development work.
                </p>
            </S.Information>



            <S.ContainerContact>
                <h1>Contact</h1>
                <S.ContainerContactContent>
                    <S.Address>
                        <h2>If you want to contact me, you can reach me via:</h2>
                        <a href="https://www.linkedin.com/in/iano-maciel-52a7401ba/"><GrLinkedin/>iano-maciel</a>
                        <a href="https://github.com/IanoMaciel"><GrGithub/>IanoMaciel</a>
                        <a href="https://www.instagram.com/"><GrInstagram/>ianooo_</a>
                        <a href="ianomaciel685@icloud.com"><GrMailOption/>ianomaciel685@icloud.com</a>
                    </S.Address>
                    <S.Profile>
                        <img src={ProfileImg} alt="profile"/>    
                    </S.Profile>
                </S.ContainerContactContent>
            </S.ContainerContact>

        </S.Container>
    )
}

export default Sobre