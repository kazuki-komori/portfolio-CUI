import {FC} from "react"

type Props = {
  type: string
}

export const RectBudge: FC<Props> = (props: Props) => {
  if (props.type == "info") {
    return (
      <span className="bg-blue-600 text-center text-sm text-white mx-2 px-1">INFO</span>
    )
  }
  if (props.type == "update") {
    return (
      <span className="bg-green-600 text-center text-sm text-white mx-2 px-1">UPDATE</span>
    )
  }
}