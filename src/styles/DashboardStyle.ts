import styled from 'styled-components'

export const Sidebar = styled.div`
background: #F3F3F5;
width: 100%;
height: 100vh;
max-width: 450px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-sizing: border-box;
`
export const Container = styled.div`

`

export const AddButton = styled.button`
color: #3980FF;
width:120px;
height:45px;
border: 1px solid #3980ff;
font-size: 15px;
font-weight: bold;
border-radius:0.625rem;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;

&:hover{
  background: #3980FF;
  color: #fff;

  svg path {
        fill: #fff;
      }

}
`