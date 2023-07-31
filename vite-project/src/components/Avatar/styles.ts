import styled from "styled-components";

export const Container = styled.div`
      width: 16rem;
      height: 18.875rem;
      display: grid;
      grid-template-rows: repeat(3,1fr);
      border-radius: 0.5rem;
      background-color: ${({theme})=>theme.colors.gray200};
      div:first-child{
        grid-row: 1/2;
        background-image: url('https://mixdeseries.com.br/wp-content/uploads/2023/06/avatar-serie-da-netflix.webp');
        background-size: cover;
        width: 100%;
        height: 4rem;
        border-radius: 0.5rem;
        >img{
          width: 3.06819rem;
          height: 3.06819rem;
          position: relative;
          top: 65%;
          left: 40%;
          border: 2px solid ${({theme})=>theme.colors.green};
          padding: 0.2rem;
          background-color: ${({theme})=>theme.colors.gray200};
        }
      }

      div:nth-child(2){
        border-bottom: 2px solid ${({theme})=> theme.colors.gray400};
        align-self: flex-start;
        height: 7rem;
        h3{
          text-align: center;
          font-family: Roboto;
          font-size: 1rem;
          font-style: normal;
          font-weight: 700;
          line-height: 160%;
        }
        h4{
          text-align: center;
          font-family: Roboto;
          font-size: 1rem;
          font-style: normal;
          font-weight: 300;
          line-height: 160%;
        }
      }
      div:nth-child(2),
      div:last-child{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      div:last-child{
        button{
          background-color: transparent;
          display: inline-flex;
          padding: 1rem 1.5rem 0.875rem 1.5rem;
          justify-content: center;
          align-items: center;
          gap: 0.625rem;
          color: ${({theme})=> theme.colors.green};
          border: 2px solid ${({theme})=> theme.colors.green};
          font-weight: 700;
          border-radius: 0.5rem;

        }
      }

      @media (max-width: 829px) {
        width: 100%;
      }
`;
