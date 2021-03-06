import React, {FC, PropsWithChildren} from "react";
import {Info} from "./info";

export const Terminal: FC = (props: PropsWithChildren<any>) => (
  <div className="h-screen pt-20">
    <div className="block bg-gray-200 h-6 rounded-t-xl border-b-2 border-gray-200">
      <span className="inline-block h-4 w-4 bg-red-400 rounded-full justify-center items-center ml-4"/>
      <span className="inline-block h-4 w-4 bg-yellow-400 rounded-full justify-center items-center mx-2"/>
      <span className="inline-block h-4 w-4 bg-green-400 rounded-full justify-center items-center"/>
    </div>
    <Info/>
    <div className="block bg-gray-800 opacity-90 h-5/6 shadow-2xl rounded-b-xl p-2 overflow-auto md:p-8">
      {props.children}
    </div>
  </div>
)