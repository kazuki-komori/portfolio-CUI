import {FC} from "react"
import {RectBudge} from "./budge/rectBudge";

export const Info: FC = () => {
  return (
    <div className="border-b border-shellGreen p-1 bg-gray-800 opacity-90">
      <section className="flex items-center justify-center">
        <RectBudge type={"info"}/>
        <span className="text-sm font-medium">
          現在建築中です。 バグやアイデアは
          <a href="https://github.com/kazuki-komori/portfolio-CUI/issues" className="text-lg text-blue-300 font-semibold" target="_blank"> こちら </a>
          にドシドシお願いします。
        </span>
      </section>
      <section className="flex items-center justify-center">
        <RectBudge type={"update"}/>
        <span className="text-sm font-medium">
          cd コマンドを修正, アップデートしました。 "cd ../" で移動できるようになりました。
        </span>
      </section>
    </div>
  )
}