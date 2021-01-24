import {FC} from "react"

type Props = {
  commands: string[]
}

export const Npm: FC<Props> = (props: Props) => {
  return (
    <div className="p-5">
      <p>{"> npm run " + props.commands[2]}</p>
      <p>open on {props.commands[2]}...</p>
    </div>
  )
}