const products = require("@/public/data/products.json")
import {Links} from "../src/components/command/links"
import {Ls} from "../src/components/command/ls"
import {Profile} from "../src/components/command/profile";
import {Neko} from "../src/components/command/neko";
import {Npm} from "../src/components/command/npm";
import {useHistory} from "react-router-dom"

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
    if (command[0] === "cd" && command.length <= 2) {
      return this.Cd(ls, command)
    }
    // npmコマンド
    if (command[0] === "npm" && command.length <= 3) {
      return this.Npm(command)
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
    const allowCommands = ["..", "../"]
    if ([...allowCommands, ...ls].indexOf(command[1]) == -1 && command.length != 1) {
      return (
        <p className="pb-1">{`No such file or directory...`}</p>
      )
    }
  }

  Npm = (commands: string[]) => {
    if (commands[2] === "twitter") {
      this.npmRun("https://twitter.com/D_kazuyan")
    }
    else if (commands[2] === "github") {
      this.npmRun("https://github.com/kazuki-komori")
    }
    else {
      return (
        <p className="pb-1">{`npm WARN \`${commands.join(" ")}\` called with no arguments...`}</p>
      )
    }
    return (
      <Npm commands={commands}/>
    )
  }

  npmRun = (url: string) => {
    setTimeout(() => {
      window.open(url, "_blank")
    }, 1000)
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