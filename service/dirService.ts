const dirs = require("@/public/data/dir.json")

export class DirService {
  retLs = (curr: string[]): string[] => {
    const currDirs = [...curr]
    // rootのとき
    if (currDirs.length === 0) {
      return Object.keys(dirs)
    }
    let ls = dirs[currDirs[0]]
    currDirs.shift()
    // この先ないとき
    if (currDirs.length === 0 && ls) {
      return Object.keys(ls)
    }
    // その他
    if (currDirs.length !== 0) {
      currDirs.map(dir => {
        ls = ls[dir]
      })
    }
    return []
  }
}