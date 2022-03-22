import { Ancora } from "./style";
import { FaInstagram } from 'react-icons/fa'

interface TypeProps {
    children:string;
}

export function ButtonInstagram (props : TypeProps) {
    return (
        <Ancora href="https://instagram.com.br">
            <span><FaInstagram/></span>
            {props.children}
        </Ancora>
    )
}