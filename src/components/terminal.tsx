import {FC, PropsWithChildren} from "react";

export const Terminal: FC = (props: PropsWithChildren<any>) => (
  <div className="h-screen pt-20">
    <div className="block bg-gray-800 h-5/6 shadow-2xl rounded p-8 overflow-auto">
      {props.children}
    </div>
  </div>
)