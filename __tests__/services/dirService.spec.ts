import {DirService} from "../../service/dirService";

describe("retLsのテスト", () => {
  const dir = new DirService()

  test("rootディレクトリのとき", () => {
    expect(["products"]).toStrictEqual(dir.retLs([]))
  })

  test("productsディレクトリのとき", () => {
    expect(["profill"]).toStrictEqual(dir.retLs(["products"]))
  })

  test("profillディレクトリのとき", () => {
    expect([]).toStrictEqual(dir.retLs(["profill"]))
  })
})
