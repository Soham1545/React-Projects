import React from 'react'
import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="/images/dices.png" alt="dices image" />
        </div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    .content {
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;

const Button = styled.button`
    padding: 10px 18px;
    background: black;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    min-width: 220px;
    border: 2px solid transparent;
    transition: 0.1s background ease-out;
    cursor: pointer;

    &:hover{
        background: white;
        border: 2px solid black;
        color: black;
        transition: 0.1s background ease-in;
    }
`;