import {FC} from "react"

export const Profile: FC = () => {
  return (
    <div className="sm:text-center p-4">
      <div className="block sm:grid sm:grid-cols-2 sm:text-lg text-md">
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
          <span className="sm:text-lg text-sm">
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