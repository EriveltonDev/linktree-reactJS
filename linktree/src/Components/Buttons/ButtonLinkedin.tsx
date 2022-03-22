import { Ancora } from "./style";
import { FaLinkedin } from 'react-icons/fa'

interface TypeProps {
    children:string;
}

export function ButtonLinkedin (props : TypeProps) {
    return (
        <Ancora href="https://linkedin.com.br">
            <span><FaLinkedin/></span>
            {props.children}
        </Ancora>
    )
}