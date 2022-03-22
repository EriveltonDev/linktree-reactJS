import { Ancora } from "./style";
import { FaFacebook} from 'react-icons/fa'

interface TypeProps {
    children:string;
}

export function ButtonFacebook (props : TypeProps) {
    return (
        <Ancora href="https://facebook.com.br">
            <span><FaFacebook/></span>
            {props.children}
        </Ancora>
    )
}