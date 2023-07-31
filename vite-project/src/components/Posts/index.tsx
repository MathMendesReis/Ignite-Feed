import { ChangeEvent, useState } from "react";
import { Container } from "./styles";

interface Content{
  id: number;
  content:string
}

export function Posts() {
  const [textComent, setTextComent] = useState<string>("");
  const [coments, setComents ] = useState<Content[]>([
    {
      id: 0,
      content:"Fala galeraa 👋.Acabei de subir mais um projeto no meu portifa.Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀 👉 jane. design/doctorcare #novoprojeto #nlw #rocketseat "
    }
  ]);
   function  handleAddNewComents() {
    event?.preventDefault();
    const length = coments.length;
    const newComent:Content = {
      id: length + 1,
      content:textComent

    }
    const newComents = [...coments,newComent]

    setComents(newComents)
    setTextComent('')
  }

  function handleSetValue(event: ChangeEvent<HTMLTextAreaElement>) {
    const newValue = event.target.value;
    setTextComent(newValue);
  }


  const isTextcoment = textComent.length === 0

  return (
    <Container>

        <header>
        <div>
          <img src="https://disneyplusbrasil.com.br/wp-content/uploads/2023/01/Avatar-O-Caminho-da-Agua-Neytiri.jpg" alt="avatar" />
        </div>
        <div>
          <h1></h1>
          <span></span>
        </div>
        <div>
          <h5>Públicado há 1h</h5>
        </div>
      </header>
      <main>
       <p>
          Fala galeraa 👋.Acabei de subir mais um projeto no meu portifa.Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀 👉 jane. design/doctorcare #novoprojeto #nlw #rocketseat "
       </p>
      </main>
      <footer>
        <form
        onSubmit={handleAddNewComents}
        >
        <span></span>
        <span>deixe seu feedback</span>
          <textarea
          value={textComent}
          required
          onChange={handleSetValue}
          />
          <button
          disabled={isTextcoment}
          type="submit">
          Publicar</button>
        </form>
      </footer>
    </Container>
  )
}
