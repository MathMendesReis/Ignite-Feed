import { useState } from "react";
import { Container } from "./styled";

export default function InsertNewComentsInPost() {

  const [comentsTextAreaValue] = useState('')
  const isDisabled = comentsTextAreaValue ===''? true:false
  return (
    <Container>
      <textarea
      name="coment"
      id="coment"
      defaultValue={''}
      required
      >
      </textarea>
      <button
      disabled={isDisabled}
      >Publicar</button>
    </Container>
  )
}
