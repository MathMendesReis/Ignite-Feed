import styled from "styled-components";

export const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
min-height: 100vh;
width: 100vw;
>header{
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  gap:1rem;
  background-color: ${({theme})=>theme.colors.gray300};
  font-size: ${({theme})=>theme.fontSize["2xl"]};
  padding: 1.25rem 0rem 1.20219rem 0rem;
}

>main{
  display: grid;
  grid-template-columns: max450px 1fr;
  width: 100%;
  flex: 1;
  >section{
    padding: 1.25rem 1.25rem 1.20219rem 1.25rem ;

  }
  >section:first-child{
    grid-column: 1/2;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    width: 100%;
  }

  >section:last-child{
    grid-column: 2/2;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    background-color: red;
    height: auto;
    >div{
      width: 52rem;
      min-height: 50vh;
      background-color: ${({theme})=>theme.colors.gray300};
      border-radius: 0.5rem;
    }

  }
}
@media (max-width:829px) {
>header{}

>main{
  display: flex;
  flex-direction: column;
  width: 100%;

  >section{
    width: 100%;
  }
  >section:first-child{

  }

  >section:last-child{

  }
}
}
`;
