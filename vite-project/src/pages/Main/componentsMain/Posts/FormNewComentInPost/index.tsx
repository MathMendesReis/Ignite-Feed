import { useState } from "react";
import { Container } from "./styled";

export default function InsertNewComentsInPost() {

  // @ts-ignore
  const [comentsTextAreaValue,setComentsTextAreaValue] = useState('')
  const isDisabled = comentsTextAreaValue ===''? true:false
  return (
    <Container>
      <textarea
      name=""
      id=""
      // @ts-ignore
      cols="30"
      // @ts-ignore
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
