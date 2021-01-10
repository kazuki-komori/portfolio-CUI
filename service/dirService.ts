const dirs = require("@/public/data/dir.json")

export class DirService {
  retLs = (curr: string[]) => {
    console.log(curr)
    const currDirs = [...curr]
    console.log(currDirs)
    let ls = dirs[currDirs[0]]
    currDirs.shift()
    console.log(currDirs)
    console.log(ls)
    if (currDirs.length === 0) {
      return ls
    }
    if (currDirs.length !== 0) {
      currDirs.map(dir => {
        ls = ls[dir]
      })
    }
    console.log(ls)
    console.log(ls.keys())
  }
}