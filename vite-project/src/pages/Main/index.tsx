import { Container } from "./styled"
import logo from '../../../public/vite.svg'
import { Avatar } from "../../components/Avatar"
import { Posts } from "../../components/Posts"

function Main() {
    return (
    <Container>
      <header>
        <img src={logo} alt="logo ignite" />
        <h1>Ignite Feed</h1>
      </header>
      <main>
      <section>
          <Avatar/>
      </section>
      <section>
        <Posts/>
      </section>
      </main>

    </Container>
    )
}

export default Main
