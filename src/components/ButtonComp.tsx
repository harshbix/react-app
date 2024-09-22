import { ReactNode } from "react"

interface Props
{
    children:ReactNode
}
const ButtonComp = ({children} : Props) => {
  return (
    <div>{children}</div>
  )
}

export default ButtonComp