import perfilImg from '../../Assests/imgs/perfil.jpg'
import { Container } from './style'

export function Perfil() {
    return (
        <Container>
            <img src={perfilImg} alt="Foto de perfil" />
        </Container>
    )
}