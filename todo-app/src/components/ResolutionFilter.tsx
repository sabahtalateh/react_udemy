import * as React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import { ResolutionState } from './App'

const StyledButton = styled(Button)<{ active?: boolean }>`
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    color: black;
`

interface Props {
    resolutionStateChanged: (state: ResolutionState) => void
    resolutionState: ResolutionState,
}

interface ResolutionButton {
    id: ResolutionState,
    label: string,
    active: boolean,
    clickListener: (state: ResolutionState) => void
}

export class ResolutionFilter extends React.Component<Props, {}> {
    render() {
        const { resolutionState, resolutionStateChanged } = this.props

        const buttons: Array<ResolutionButton> = [
            {
                id: ResolutionState.All,
                label: 'All',
                active: resolutionState === ResolutionState.All,
                clickListener: () => resolutionStateChanged(ResolutionState.All)
            },
            {
                id: ResolutionState.Ready,
                label: 'Ready',
                active: resolutionState === ResolutionState.Ready,
                clickListener: () => resolutionStateChanged(ResolutionState.Ready)
            },
            {
                id: ResolutionState.InProgress,
                label: 'In Progress',
                active: resolutionState === ResolutionState.InProgress,
                clickListener: () => resolutionStateChanged(ResolutionState.InProgress)
            },
        ]

        return <ButtonGroup>
            {
                buttons.map(b =>
                    <StyledButton onClick={ b.clickListener }
                                  active={ b.active }
                                  key={ b.id }>
                        { b.label }
                    </StyledButton>)
            }
        </ButtonGroup>
    }
}
