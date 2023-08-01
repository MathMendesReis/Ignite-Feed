import styled from "styled-components";

export const Container = styled.header`
display: flex;
align-items: center;
justify-content: center;
padding: 1.1452rem 0.8425rem;
background-color: ${({theme})=>theme.colors.gray300};
gap: 1rem;
width: 100%;
flex-wrap: wrap;
h1{
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  line-height: 5px;
  letter-spacing: 3px;
}


`
