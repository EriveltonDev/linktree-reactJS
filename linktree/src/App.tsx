import { ButtonFacebook } from "./Components/Buttons/ButtonFacebook";
import { ButtonInstagram } from "./Components/Buttons/ButtonInstagram";
import { ButtonLinkedin } from "./Components/Buttons/ButtonLinkedin";
import { ButtonTwitter } from "./Components/Buttons/ButtonTwitter";
import { Button } from "./Components/Buttons/Button";
import { Footer } from "./Components/Footer/Footer";
import { Perfil } from "./Components/Perfil/Perfil";
import { Container } from "./Components/ContainerAppStyle/Container";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";


function App() {
  return (
    <Container>
      <Perfil />
      <Button link="https://facebook.com.br" Icon={FaFacebook}>Clique aqui para acessar seu Facebook</Button>
      <Button link="https://instagram.com.br" Icon={FaInstagram}>Clique aqui para acessar seu Instagram</Button>
      <Button link="https://linkedin.com.br" Icon={FaLinkedin}>Clique aqui para acessar seu Linkedin</Button>
      <Button link="https://twitter.com.br" Icon={FaTwitter}>Clique aqui para acessar seu Twitter</Button>
      <Button link="https://tiktok.com.br" Icon={FaTiktok}>Clique aqui para acessar seu TikTok</Button>
      <Button link="https://tiktok.com.br" Icon={FaYoutube}>Clique aqui para acessar seu Youtube</Button>
      <Footer />
    </Container>
  );
}

export default App;
