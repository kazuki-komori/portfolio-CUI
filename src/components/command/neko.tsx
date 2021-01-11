import {FC} from "react"

export const Neko: FC = () => {
  const n: number = Math.floor(Math.random() * 5)
  const res = ["にゃ～", "にゃーん", "🐈だお", "にゃんにゃん", "にゃーーーす"]
  return (
    <p className="pb-1">{res[n]}</p>
  )
}