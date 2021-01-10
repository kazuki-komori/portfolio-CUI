import React, {FC, PropsWithChildren, useState, forwardRef, useImperativeHandle, ForwardedRef} from "react"
const dirs = require("@/public/data/dir.json")

type Props = {
  commands?: string[]
}

export const Directory = forwardRef((props: PropsWithChildren<Props>, ref: ForwardedRef<any>) => {
  useImperativeHandle(ref, () => ({
    setDir () {
      return
    }
  }))
  return (
    <p className="text-white pr-3 pl-6 bg-opacity-80 bg-gray-500 rounded-r-sm">~/{props.commands?.join("/") ?? ""}</p>
  )
})