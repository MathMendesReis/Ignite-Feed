import logo from '../../../../../public/vite.svg'
import { Container } from './styled'

function Header() {
    return (
    <Container>
      <img src={logo} alt="logo ignite" />
      <h1>Ignite Feed</h1>
    </Container>
    )
}

export default Header
