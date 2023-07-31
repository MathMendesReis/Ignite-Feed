import { Container } from "./styles"

export function Avatar() {
  return(
<Container>
    <div>
      <img src="https://disneyplusbrasil.com.br/wp-content/uploads/2023/01/Avatar-O-Caminho-da-Agua-Neytiri.jpg" alt="avatar" />
    </div>
    <div>
      <h3>Leslie Alexander</h3>
      <h4>UI Designer</h4>
    </div>
      <div>
        <button title="editar perfil">
          editar perfil
        </button>
      </div>
</Container>
  )
}
