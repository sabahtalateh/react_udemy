import * as React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'


const StyledForm = styled.form`
  display:flex;
  margin-top: 10px;
`

const InputBar = styled.input`
  border-radius: 0.25rem;
  border: 1px solid rgba(0,0,0,0.2);
  flex-grow: 1;
  margin-right: 10px;
  padding-right: 10px;
  padding-left: 10px;
`

const AddButton = styled(Button)``

interface Props {
    addItem: (text: string) => void
}

interface State {
    text: string,
}

const onSubmit = (e: React.FormEvent) => {

}

class AddItem extends React.Component<Props, State> {
    state = {
        text: ''
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        this.props.addItem(this.state.text)
        this.setState({ text: '' })
    }

    render() {
        return (
            <StyledForm onSubmit={ this.handleSubmit }>
                <InputGroup>
                    <InputBar onChange={ (e) => this.setState({ text: e.target.value }) } value={ this.state.text }/>
                    <AddButton type="submit">Add</AddButton>
                </InputGroup>
            </StyledForm>

        )
    }
}

export default AddItem
