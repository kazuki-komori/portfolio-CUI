import {FC} from "react"

type Props = {
  type: string
}

export const RectBudge: FC<Props> = () => {
  return (
    <span className="bg-blue-600 text-center text-sm text-white mx-2 px-1">INFO</span>
  )
}