import {FC, PropsWithChildren} from "react";

export const Terminal: FC = (props: PropsWithChildren<any>) => (
  <div className="h-screen pt-20">
    <div className="block bg-gray-800 h-5/6 shadow-2xl rounded p-2 overflow-auto md:p-8">
      {props.children}
    </div>
  </div>
)