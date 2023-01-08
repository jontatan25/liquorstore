import React,{FC} from 'react'
import "./marquee.css"

type Props = {
    text: string
  };
const Marquee:FC<Props> = ({text}) => {
  return (
    <div
    className="series__marquee -flex -marque-left"
    aria-hidden="true"
  >
    <span>{text}</span>
    <span>{text}</span>
    <span>{text}</span>
    <span>{text}</span>
  </div>
  )
}

export default Marquee