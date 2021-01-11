import {FC} from "react"
type Props = {
  ls: string[]
}

export const Ls: FC<Props> = ({ls}) => {
  return (
    <div className="text-center grid grid-cols-6 p-5">
      {ls.map((dir: string, idx: number) => (
        <p key={idx}>{dir}/</p>
      ))}
    </div>
  )
}