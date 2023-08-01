import styled from "styled-components";

export const Container = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
width: 100%;
>textarea{
  width: 100%;
  resize: none;
  border-radius: 0.5rem;
  padding: 0.855rem 1rem;
  background-color: ${({theme})=>theme.colors.black};
  color: ${({theme})=>theme.colors.white};
  letter-spacing: 3px;
  font-size: 1.2rem;
  height: 6rem;
  &:focus{
    outline: none;
    box-shadow: 0 0 5px ${({theme})=>theme.colors.green};
  }
}


>button{
  padding: 1rem 1.5rem 0.875rem 1.5rem;
  align-self: flex-start;
  border-radius: 0.5rem;
  border: none;
  background-color: ${({theme})=>theme.colors.green};
  color: ${({theme})=>theme.colors.white};
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: background-color ease 1s;
  &:hover:not(:disabled){
    background-color: ${({theme})=>theme.colors.greenLigth};
  }

}

>button:disabled{
  opacity: 0.7;
  cursor: not-allowed;
}
`
