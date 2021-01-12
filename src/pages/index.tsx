import React, {FC, useState, ChangeEvent, useRef, useEffect} from 'react'
import Head from 'next/head'
import {Terminal} from "../components/terminal";
import {Directory} from "../components/status/directory";
import style from "../../styles/Home.module.css"
import {CommandService} from "../../service/commandService";
import {DirService} from "../../service/dirService";

import dirs from "../../public/data/dir.json"
import {ActiveCommand} from "../components/command/activeCommand";

const dirService = new DirService()

const Home: FC = () => {
  const stateDirs: string[] = Object.keys(dirs)
  const [change, setChange] = useState("")
  const [logs, setLogs] = useState([])
  const [replies, setReplies] = useState([])
  const [dir, setDir] = useState([])
  const [ls, setLs] = useState(stateDirs)

  const cursor = useRef(null)
  const bottom = useRef(null)
  const directory = useRef(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChange(e.target.value)
  }

  const handleDir = (commands: string) => {
    const command = commands.split(" ")
    if (!command) {
      return
    }
    if (command[0] == "cd" && command.length == 1) {
      setDir([])
      setLs(dirService.retLs([]))
    }
    if (command[0] == "cd" && command.length == 2) {
      const arrowCommands: string[] = ["..", "../"]
      if (arrowCommands.indexOf(command[1]) !== -1 && dir.length !== 0) {
        const rmArr = [...dir]
        rmArr.pop()
        setDir(rmArr)
        setLs(dirService.retLs(rmArr))
      }
      if (ls.indexOf(command[1]) !== -1) {
        setDir([...dir, command[1]])
        setLs(dirService.retLs([...dir, command[1]]))
      }
    }
  }

  const commandService = new CommandService()
  const onEnter = (e: any) => {
    if (e.charCode == 13) {
      // コマンド処理
      const res = commandService.handler(change, ls)
      if (res == "CA") {
        setReplies([])
        setLogs([])
      } else {
        setReplies([...replies, res])
        // ディレクトリの処理
        handleDir(change)
        // ログの追加
        setLogs([...logs, {command: change, dir: dir}])
      }
      // クリア
      setChange("")
    }
  }

  const anyWhereClick = () => {
    cursor.current.focus()
  }

  useEffect(() => {
    cursor.current.focus()
    bottom.current.scrollIntoView({behavior: "smooth"})
  })
  return(
    <div onClick={anyWhereClick} className="bg-desktop-img bg-cover">
      <Head>
        <title>$ kazuyan</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="container mx-auto text-shellGreen text-xl tracking-widest">
        <Terminal>
          <div className="relative">
            <div className="py-3">
              <span className="block text-sm">last updated: 2021/1/13 1:40</span>
              <span className="block sm:text-xl text-sm">ようこそ、kazuyanのポートフォリオへ</span>
            </div>
            <ActiveCommand/>
            {logs.map((log: {command: string, dir: string[]}, idx: number) => (
              <span key={idx}>
                <span className="flex text-lg" id={`${idx}`}>
                  <p className="text-white bg-vueGreen bg-opacity-50 leading-6 px-1 rounded-sm">kazuyan</p>
                  <span className="relative">
                    <div className={style.rightArrow} />
                  </span>
                  <Directory commands={log.dir}/>
                  <span className="relative mr-7">
                    <div className={style.rightArrow} />
                  </span>
                  <p>{log.command}</p>
                </span>
                {replies[idx]}
              </span>
            ))}
            <span className="flex text-lg" id="hge">
              <p className="text-white bg-vueGreen bg-opacity-50 leading-6 px-1 rounded-l-sm">kazuyan</p>
              <span className="relative">
                <div className={style.rightArrow} />
              </span>
              <Directory ref={directory} commands={dir}/>
              <span className="relative mr-7">
                <div className={style.rightArrow} />
              </span>
              <input
                autoComplete="off"
                ref={cursor}
                className="bg-transparent focus-within:outline-none tracking-widest w-1/2 sm:w-3/4"
                type="text"
                value={change}
                onChange={handleChange}
                onKeyPress={e => onEnter(e)}
              />
            </span>
            <div ref={bottom} style={{ float:"left", clear: "both" }}/>
          </div>
        </Terminal>
      </div>
    </div>
  )
}

export default Home