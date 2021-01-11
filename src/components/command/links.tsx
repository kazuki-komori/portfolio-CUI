import {FC} from "react"

export const Links: FC = () => {
  return (
    <div className="text-center text-blue-400 grid grid-cols-6 p-5">
      <a className="hover:text-blue-300 duration-300 transition" href="https://github.com/kazuki-komori" target="_blank">Github</a>
      <a className="hover:text-blue-300 duration-300 transition" href="https://twitter.com/D_kazuyan" target="_blank">Twitter</a>
      <a className="hover:text-blue-300 duration-300 transition" href="https://www.wantedly.com/id/D_kazuyan" target="_blank">Wantedly</a>
    </div>
  )
}