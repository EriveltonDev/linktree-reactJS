import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Container } from './style'

export function Footer() {
    return (
        <Container>
        <a href="#"><FaFacebook/></a>
        <a href="#"><FaInstagram/></a>
        <a href="#"><FaLinkedin/></a>
        <a href="#"><FaTwitter/></a>
        </Container>
    )
}