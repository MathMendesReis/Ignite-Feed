import styled from "styled-components";

export const Container = styled.article`
background-color: ${({theme})=>theme.colors.gray300};
border-radius: 0.5rem;
width: 16rem;
height: 18.375rem;
display: grid;
grid-template-rows: repeat(3 1fr);
>header{
  height: 8vh;
  background-image: url('https://i.pinimg.com/originals/2d/e8/82/2de882cd4f3992ada3d609e3a183f7a4.jpg');
  width: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem 0.5rem 0 0;
}
>main{
  height:12.5vh;
  img{
    width: 3.06819rem;
    height: 3.06819rem;
    border-radius: 0.3125rem;
    position: relative;
    top: -10%; /* Posiciona a imagem no meio vertical do contêiner */
    left: 50%; /* Posiciona a imagem no meio horizontal do contêiner */
    transform: translate(-50%, -50%);
    border: 0.2rem solid ${({theme})=>theme.colors.green};
    padding: 0.2rem;
    background-color: ${({theme})=>theme.colors.black};
  }
  >div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    h3{
      font-size: 1.3rem;
      letter-spacing: 2px;
      font-weight: 600;
    }
    h4{
      font-size: 1rem;
      letter-spacing: 2px;
      font-weight: 400;
    }
  }

}
>footer{
  height:12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  >button{
    padding: 0.825rem 4.855rem;
    background-color: ${({theme})=>theme.colors.green};
    border: none;
    border-radius: 0.5rem;
    display: flex;
    >span{
      color: ${({theme})=>theme.colors.white};
      font-size: 1rem;
      font-weight: 500;
      text-transform: capitalize;
    }

  }

}

@media (max-width: 830px) {
  width: 100%;
  >main{
    img{
      position: absolute;
      top: 23%; /* Posiciona a imagem no meio vertical do contêiner */
      left: 50%; /* Posiciona a imagem no meio horizontal do contêiner */
      transform: translate(-50%, -50%);
    }
    >div{
    padding-top:25px ;

    }
  }

}
`;
