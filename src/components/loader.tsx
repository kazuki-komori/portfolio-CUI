import {FC, useState, useEffect, Dispatch, SetStateAction} from "react"
import {RectBudge} from "./budge/rectBudge";

type Props = {
  onLoad:  Dispatch<SetStateAction<boolean>>
  isLoading: boolean
}

export const Loader: FC<Props> = (props: Props) => {
  const [loader, addLoad]: [string[], any] = useState(["#"])
  // const [isLoading, onLoad] = useState(true)
  const [width, setWidth] = useState(100)
  const [start, setStart] = useState(Date.now())
  const [end, setEnd] = useState(Date.now())


  const load = () => {
    const num: number = Math.floor(Math.random() * 99) + 10
    const timeout = setTimeout(() => {
      addLoad([...loader, "#"])
    }, num)
    return () => clearTimeout(timeout)
  }

  useEffect(() => {
    setWidth(Math.floor(window.innerWidth/40))
    if (loader.length !== width) {
      load()
    } else {
      setEnd(Date.now())
      props.onLoad(false)
    }
  }, [loader])

  if (props.isLoading) {
    return (
      <section className="sm:text-xl text-sm">
        <p className="pb-1">{`> npm run load`}</p>
        <p className="flex pb-1">
          <span className="blinking pr-2">now Loading... </span>
          <span className="text-center text-2xl">
          {loader}
        </span>
          <span className="block ml-auto">[{Math.floor(loader.length * 100/width * 10)/10}%]</span>
        </p>
      </section>
    )
  }
  return (
    <section className="opacity-70 pb-1 border-shellGreen border-b-2 sm:text-xl text-sm">
      <p className="pb-1">{`> npm run load`}</p>
      <p className="flex pb-1">
        <span className="pr-2">now Loading... </span>
        <span className="text-center text-2xl">
          {loader}
        </span>
        <span className="block ml-auto">[{Math.floor(loader.length * 100/width * 10)/10}%]</span>
      </p>
      <p>Command update in {(end - start) /1000}s</p>
      <p className="flex items-center">
        <span className="pr-1">npm</span>
        <RectBudge type="info"/>
        <span>load successfully!</span>
      </p>
    </section>
  )
}