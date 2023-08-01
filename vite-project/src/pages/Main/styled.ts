import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;
>main{
  padding: 0 0 2rem 2rem;
  width: 68%;
  display: grid;
  min-height: 100vh;
  grid-template-columns: 16rem 1fr;
  gap: 2rem;
}

@media (max-width: 830px) {
>main{
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem ;
  width: 100%;
}
}
`
