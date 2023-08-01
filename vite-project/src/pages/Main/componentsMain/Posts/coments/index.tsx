import { Container } from "./styled";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Coments() {
  return (
  <Container>
    <img src="https://static.vecteezy.com/ti/vetor-gratis/p3/6606249-nice-style-girl-retrato-para-redes-sociais-user-avatar-vetor.jpg" alt="avatar" />
    <div>
      <div>
        <div>
          <span>name</span>
          <span>profissao</span>
        </div>
          <button title="deletar comentario"><DeleteIcon/></button>
        </div>
      <p>Muito bom Devon, parabéns!! 👏👏</p>
    </div>
  </Container>
  )
}
