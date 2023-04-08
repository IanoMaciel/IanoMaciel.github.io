import React from "react"
import { MdDarkMode, MdBrightnessHigh } from 'react-icons/md'
// styles
import * as S from './styles'

const Toogle = () => {
    return(
        <S.Container>
            <MdBrightnessHigh/>
            <S.ToggleSelector 
                onChange={() => console.log('trocou')}
                checked={false}
                uncheckedIcon={false}
                checkedIcon={false}
            />
            <MdDarkMode/>
        </S.Container>
    );
}

export default Toogle
