import {FC} from "react"

export const Profile: FC = () => {
  return (
    <div className="text-center p-4">
      <div className="grid grid-cols-2">
        <p>
          <span className="pr-5">
            Name:
          </span>
          Kazuki Komori
        </p>
        <p>
          <span className="pr-5">
            Organizations:
          </span>
          <span className="text-lg">
            Doshisha.univ / chatbox-inc
          </span>
        </p>
      </div>
      <p className="py-4">
        <span className="pr-5">
          Skills:
        </span>
        <span className="text-lg">
          Vue.js (Nuxt) / React (Next.js) / Python (Flask) / R
        </span>
      </p>
    </div>
  )
}