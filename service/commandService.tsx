const products = require("@/public/data/products.json")
import {Links} from "../src/components/command/links"
import {Ls} from "../src/components/command/ls"
import {Profile} from "../src/components/command/profile";
import {Neko} from "../src/components/command/neko";

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
    // 直コマンド
    if (command[0] === "links" && command.length == 1) {
      return this.Links()
    }
    if (command[0] === "profile" && command.length == 1) {
      return this.Profile()
    }
    // UNIXコマンド
    if (command[0] === "ls" && command.length == 1) {
      return this.Ls(ls)
    }
    if (command[0] === "cd" && command.length == 2) {
      return this.Cd(ls, command)
    }
    // 隠しコマンド
    if (command[0] === "neko" && command.length == 1) {
      return this.Neko()
    }
    if (command[0] === "clear" && command.length == 1) {
      return "CA"
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
      <Links/>
    )
  }

  Ls = (ls: string[]) => {
    return (
      <Ls ls={ls}/>
    )
  }

  Cd = (ls: string[], command: string[]) => {
    if (ls.indexOf(command[1]) == -1 && command[1] !== "..") {
      return (
        <p className="pb-1">{`No such file or directory...`}</p>
      )
    }
  }

  Profile = () => {
    return (
      <Profile/>
    )
  }

  Neko = () => {
    return (
      <Neko/>
    )
  }
}