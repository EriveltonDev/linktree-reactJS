import { Ancora } from "./style";
import { IconType } from 'react-icons'

interface TypeProps {
  link: string;
  children: string;
  Icon: IconType
}

export function Button(props: TypeProps) {
  return (
    <Ancora href={props.link}>
      <span><props.Icon /></span>
      {props.children}
    </Ancora>
  )
}