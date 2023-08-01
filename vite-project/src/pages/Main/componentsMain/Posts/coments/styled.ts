import styled from "styled-components";

export const Container = styled.section`
display: flex;
justify-content: flex-start;
align-items: flex-start;
gap: 2rem;
/* background-color: yellow; */
width: 100%;
img{
    width: 3.06819rem;
    height: 3.06819rem;
    border-radius: 0.3125rem;
    border: 0.2rem solid ${({theme})=>theme.colors.green};
    padding: 0.2rem;
    background-color: ${({theme})=>theme.colors.black};
  }
>div{
  background-color: ${({theme})=>theme.colors.gray200};
  width: 42.875rem;
  height: 7.5rem;
  border-radius: 0.5rem;
  padding: 0.8rem;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  >div:first-child{
    display: flex;
    align-items: center;
    >button{
      margin-left: auto;
      border: none;
      background-color: transparent;
      color: ${({theme})=>theme.colors.white};
    }
    >div{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
  }

}
`;
