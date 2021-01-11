import Link from "next/link"
const products = require("@/public/data/products.json")
const dirs = require("@/public/data/dir.json")
import {DirService} from "./dirService";

interface product {name: string, description: string, link: string}

export class CommandService {
  dirs: {
    products: product
  }
  constructor() {
    this.dirs = {
      products: products,
    }
  }
  handler = (commandBlock: string, ls: string[]) => {
    const command = commandBlock.split( " ")
    if (!command[0]) {
      return ""
    }
    if (command[0] === "links" && command.length == 1) {
      return this.Links()
    }
    if (command[0] === "ls" && command.length == 1) {
      return this.Ls(ls)
    }
    if (command[0] === "cd" && command.length == 2) {
      return ""
    }
    return this.CommandNotFound(command[0])
  }

  CommandNotFound = (command: string) => {
    return (
      <p className="pb-1">{`command not found: ${command}`}</p>
    )
  }

  Links = () => {
    return (
      <div className="text-center text-blue-400 grid grid-cols-6 p-5">
        <a className="hover:text-blue-300 duration-300 transition" href="https://github.com/kazuki-komori" target="_blank">Github</a>
        <a className="hover:text-blue-300 duration-300 transition" href="https://twitter.com/D_kazuyan" target="_blank">Twitter</a>
        <a className="hover:text-blue-300 duration-300 transition" href="https://www.wantedly.com/id/D_kazuyan" target="_blank">Wantedly</a>
      </div>
    )
  }

  Ls = (ls: string[]) => {
    return (
      <div className="text-center grid grid-cols-6 p-5">
        {ls.map((dir: string, idx: number) => (
          <p key={idx}>{dir}/</p>
        ))}
      </div>
    )
  }
}