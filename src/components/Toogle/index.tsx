import React from "react"
import Switch from 'react-switch'

// styles
import * as S from './styles'

const Toogle = () => {
    return(
        <S.Container>
            <S.ToggleLabel>Light</S.ToggleLabel>
            <S.ToggleSelector 
                onChange={() => console.log('trocou')}
                checked={false}
                uncheckedIcon={false}
                checkedIcon={false}
            />
            <S.ToggleLabel>Dark</S.ToggleLabel>
        </S.Container>
    );
}

export default Toogle
