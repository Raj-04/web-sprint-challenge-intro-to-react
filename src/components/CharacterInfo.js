import React from 'react'
import styled from 'styled-components'

const Style = styled.div`
font-family: "Times New Roman";
text-align: center;
width: 30%;
height: 20%;
border: none;
border-radius: 2px;
color: white;
margin: 2%;
&:hover {
color: blue; }
`

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
            <Style>{characterInfo.name}</Style>
            <Style>Gender: {characterInfo.gender}</Style>
            <Style>Height: {characterInfo.height}</Style>
            <Style>Mass: {characterInfo.mass}</Style>
            <Style>BirthYear: {characterInfo.birth_year}</Style>
            <Style>Eye Color: {characterInfo.eye_color}</Style>
            <Style>Hair Color{characterInfo.hair_color}</Style>
            <Style>Skin Color: {characterInfo.skin_color}</Style>
            <button onClick={close}>Close</button>
        </StyledCharacter>
    )
}