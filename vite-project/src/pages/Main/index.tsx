import { Container } from "./styled"
import Header from "./componentsMain/Header"
import Sidebar from "./componentsMain/sidebar"
import Posts from "./componentsMain/Posts"

function Main() {
    return (
    <Container>
      <Header/>
      <main>
        <Sidebar/>
        <Posts/>
        <Posts/>
        <Posts/>
      </main>
    </Container>
    )
}

export default Main
