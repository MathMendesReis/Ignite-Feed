import { useState } from "react";
import { Container } from "./styled";

export default function InsertNewComentsInPost() {
  const [comentsTextAreaValue,setComentsTextAreaValue] = useState('')
  const isDisabled = comentsTextAreaValue ===''? true:false
  return (
    <Container>
      <textarea
      name=""
      id=""
      cols="30"
      rows="10"
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
