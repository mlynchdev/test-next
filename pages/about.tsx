import React from 'react'
import styled from 'styled-components'

const AboutMe = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: yellowgreen;
`
export default function About () {
    return (
        <>
          <AboutMe>This is me.</AboutMe>  
        </>
    )
}
