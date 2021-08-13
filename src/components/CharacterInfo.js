import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
color: white;
display: block;
text-align: center;
margin: 5%;
display: flex;
flex-flow: column nowrap;
justify-content: space-between;
align-items: center;
border: 3px solid orange;
padding: 10px;
font-weight: bold;
font-size: 20px;
background-color: black;
`

export default function CharacterInfo(props) {
    const { characterInfo, close } = props

    return (
        <StyledCharacter>
            <p>{characterInfo.name}</p>
            <p>Gender: {characterInfo.gender}</p>
            <p>Height: {characterInfo.height}</p>
            <p>Mass: {characterInfo.mass}</p>
            <p>BirthYear: {characterInfo.birth_year}</p>
            <p>Eye Color: {characterInfo.eye_color}</p>
            <p>Hair Color{characterInfo.hair_color}</p>
            <p>Skin Color: {characterInfo.skin_color}</p>
            <button onClick={close}>Close</button>
        </StyledCharacter>
    )
}