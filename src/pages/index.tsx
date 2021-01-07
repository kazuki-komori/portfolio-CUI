import React, {FC, useState, ChangeEvent, useRef, useEffect} from 'react'
import Head from 'next/head'
import {Terminal} from "../components/terminal";

const Home: FC = () => {
  const [key, setKey] = useState("")
  const [change, setChange] = useState("")
  const [logs, setLogs] = useState([])

  const cursor = useRef(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChange(e.target.value)
  }

  const onEnter = (e: any) => {
    if (e.code == "Enter") {
      setKey(e.target.value)
      setChange("")
      setLogs([...logs, change])
    }
  }

  const anyWhereClick = () => {
    cursor.current.focus()
  }

  useEffect(() => {
    cursor.current.focus()
  })
  return(
    <div onClick={anyWhereClick}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="container mx-auto text-green text-xl tracking-widest">
        <Terminal>
          <div className="py-3">
            <span>ようこそ、わいのポートフォリオへ</span>
          </div>
          {logs.map(log => (
            <span className="flex">
              <p className="pr-3">{"[kazuyan >]"}</p>
              <p>{log}</p>
            </span>
          ))}
          <span className="flex">
            <p className="pr-3">{"[kazuyan >]"}</p>
            <input
              autoComplete="off"
              ref={cursor}
              className="bg-transparent focus-within:outline-none tracking-widest"
              type="text"
              value={change}
              onChange={handleChange}
              onKeyPress={e => onEnter(e)}
            />
          </span>
        </Terminal>
      </div>
    </div>
  )
}

export default Home