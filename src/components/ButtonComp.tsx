import { ReactNode } from "react"

interface Props
{
    children:ReactNode;
}
const ButtonComp = ({children} : Props) => {
  return (
    <div className="text-center">{children}</div>
  )
}

export default ButtonComp