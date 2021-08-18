import styled from "styled-components";

export const Title = styled.h1`
color: #133660;
font-size: 2.5rem;
font-weight: bold;
padding: 0 3rem;
`

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 42px;
width: 450px; 
height: 400px;
background-color: #fff;
border-radius: 1.5rem;
margin: 64px;
`

export const LoginButton = styled.button`
width:21rem;
height:3.75rem;
border: 1px solid #0080FF;
color: #0080FF;
font-weight: bold;
border-radius:0.625rem;
transition: background 0.2s;
transition: color 0.2s;

&:hover {
  color: #fff;
  background: #3980FF;
}
`