import {FC} from "react"

export const ActiveCommand: FC = () => {
  return (
    <div className="border-dashed border-2 border-shellGreen rounded-lg p-2 mb-4">
      <span>使用可能なコマンド一覧</span>
      <section className="grid sm:grid-cols-6 text-center grid-cols-3">
        <p>links</p>
        <p>profile</p>
        <p>ls</p>
        <p>{"cd <dir>"}</p>
        <p>隠しコマンド</p>
        <p>clear</p>
      </section>
    </div>
  )
}