import styled from 'styled-components';
import Switch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
    display: flex;
    align-items: center;

`

export const ToggleLabel = styled.span`
    color: '#000'
`

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({theme}) => ({
        onColor: '#1E1E1E',
        offColor: '#D9D9D9'
    })
)<ReactSwitchProps>`
    margin: 0 10px;
`;