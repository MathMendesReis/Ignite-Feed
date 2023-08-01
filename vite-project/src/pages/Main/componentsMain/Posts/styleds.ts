import styled from "styled-components";

export const Container = styled.section`
width: 100%;
min-height: 38.8125rem;
background-color: ${({theme})=>theme.colors.gray300};
border-radius: 0.5rem;
padding: 1.955rem 1.55rem;
grid-column: 2/2;
>header{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  min-height: 8vh;
  img{
    width: 3.06819rem;
    height: 3.06819rem;
    border-radius: 0.3125rem;
    border: 0.2rem solid ${({theme})=>theme.colors.green};
    padding: 0.2rem;
    background-color: ${({theme})=>theme.colors.black};
  }
  >div{
   h3,h4{
    font-family: Roboto;
    font-style: normal;
    line-height: 160%;
   }
   h3{
    font-size: 1rem;
    font-weight: 700;
   }
   h4{
    font-size: 1rem;
    font-weight: 300;
   }
  }
  >span{
    margin-left: auto;
  }
}

>main{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  p{
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
  }
  p:last-child{
    color: ${({theme})=>theme.colors.green};
  }
  >span{
    background-color: ${({theme})=>theme.colors.gray400};
    height: 0.1rem;
    margin: 2rem 0
  }
}

>footer{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  >span{
    font-family: Roboto;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    color: ${({theme})=>theme.colors.white};
    line-height: 160%; /* 1.6rem */
  }
}


@media (max-width:300px) {
  >header{
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    >div{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    >span{
      margin: 0;
    }
  }

}

`;
