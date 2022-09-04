import React from 'react'
import styled, { css } from 'styled-components/macro'
import Button from './Button';

const Intro = styled.div`
  margin-top: 8em;
  text-align: center;
  height: 80vh;
`;

const btnCSS = css`
    margin-top: 2em;
`;


const Start = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <Intro>
            <h1>IQ Test for kids from 7 to 16 year old</h1>
            <Button onClick={startQuiz} css={btnCSS}>Start Testing</Button>
            <p style={{marginTop: '4rem', paddingLeft:"8rem", paddingRight:"8rem"}}>Most IQ tests are not suitable for children, as they are originally developed for the adult population. However, if you want to know the IQ of a child between the ages of 7 and 16, there are several tests that can help you. There is an IQ test for children, developed by us, which, unlike similar ones, can also determine the IQ level of children at the age of 6 years.The child will be shown a series of three pictures arranged with some regularity. Children will need to choose pictures that are suitable for an empty cell. The first four questions should be answered together with the child so that he/she understands the essence of the task - these questions are not taken into account in the calculation of the child’s IQ. Let's get started!</p>
        </Intro>
    )
}

export default Start
