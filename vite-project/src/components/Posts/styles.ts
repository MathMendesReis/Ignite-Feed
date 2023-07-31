import styled from "styled-components";

export const Container = styled.div`
max-width: 52rem;
min-height: 38.8125rem;
display: flex;
flex-direction: column;
flex-wrap: wrap;
gap: 3rem;
>header{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 2rem;
  height: 3.06819rem;
  margin-top: 2.6rem;
  div:nth-child(2){
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4645rem;

    h1{
      font-family: Roboto;
      font-size: 1rem;
      font-style: normal;
      font-weight: 700;
      line-height: 160%; /* 1.6rem */
    }

  }
  div:last-child{
    align-items: center;
    margin-left: auto;
  }
  div{
    height: 100%;
    display: flex;
    img{
          width: 3.06819rem;
          height: 3.06819rem;
          border: 2px solid ${({theme})=>theme.colors.green};
          padding: 0.2rem;
          background-color: ${({theme})=>theme.colors.gray200};
        }
  }

}

>main{}
>footer{

  >form{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 47rem;
    textarea{
      min-height: 6rem;
      padding: 0.8125rem 32.9375rem 3.8125rem 1rem;
      width: 100%;
      align-items: center;
      border-radius: 0.5rem;
      background-color: ${({theme})=>theme.colors.gray900};
      border: 0.1rem solid ${({theme})=>theme.colors.green};
      transition: color 0.3s ease, border-color 0.3s ease;
      resize: none;
      color: ${({theme})=>theme.colors.white};
    }
    textarea:focus {
            outline: none;
            border-color: ${({theme})=>theme.colors.greenLigth};
          }
    >button{
      display: inline-flex;
      padding: 1rem 1.5rem 0.875rem 1.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
      border-radius: 0.5rem;
      width: 8rem;
      background-color: ${({theme})=> theme.colors.green};
      color: ${({theme})=> theme.colors.white};
      font-weight: 900;
      font-family: 'roboto';
      font-size: 1rem;
      border: none;
      transition: background-color ease 0.3s;
        &:hover:not(button:disabled) {
        background-color: ${({ theme }) => theme.colors.greenLigth};
        color: ${({ theme }) => theme.colors.white};
        }
    }
    >button:disabled{
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
}


@media (max-width: 829px) {
  width: 100%;
  padding: 2rem;

  >footer{
    width: 100%;
    form{
    textarea{
    padding: 1rem;
  }
    }
  }


}
`;
