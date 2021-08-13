// Write your Character component here
import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes `
0% {
    opacity: 0;
}
100% {
    opacity: 5;
}
`

const StyledButton = styled.button`
border: 2px solid green;
width: 75%;
margin-left: 10%;
display: flex;
flex-flow: column nowrap;
align-items: left;
padding: 20px;
font-weight: bold;
font-size: 25px;
background: transparent;
&:hover {
    animation: 2s ${fadeIn} ease-out;
    transform: scale(1.1);
}
`

export default function Character ({ info, action }) {
    return (

        <StyledButton onClick={() => action(info)}>{info.name}
        {<br></br>}{info.birth_year}
        </StyledButton>
    )
}