import { Ancora } from "./style";
import { FaTwitter } from 'react-icons/fa'

interface TypeProps {
    children:string;
}

export function ButtonTwitter (props : TypeProps) {
    return (
        <Ancora href="https://twitter.com.br">
            <span><FaTwitter/></span>
            {props.children}
        </Ancora>
    )
}