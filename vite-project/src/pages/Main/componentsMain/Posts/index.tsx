import InsertNewComentsInPost from "./FormNewComentInPost";
import Coments from "./coments";
import { Container } from "./styleds";

export default function Posts() {
  return (
  <Container>
    <header>
      <img src="https://static.vecteezy.com/ti/vetor-gratis/p3/6606249-nice-style-girl-retrato-para-redes-sociais-user-avatar-vetor.jpg" alt="avatar" />
      <div>
        <h3>nome</h3>
        <h4>profissao</h4>
      </div>
      <span>publicado há 1hora</span>
    </header>
    <main>
      <p>Fala Galera!</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 👉</p>
      <p>jane.design/doctorcare</p>
      <p>jane.design/doctorcare #novoprojeto #nlw #rocketseat</p>
      <span></span>
      {/* <p></p> */}
    </main>
    <footer>
      <span>#Deixe seu feedback</span>
      <InsertNewComentsInPost/>
      <Coments/>
    </footer>
  </Container>
  )
}
