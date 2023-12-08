import React from 'react'
import '../profileCard/card.css'

const Button = ({href, style, text}) => {
  return (
    <a href={href} className="btn" style={style}>{text}</a>
  )
}

export default Button