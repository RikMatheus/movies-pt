import React from "react"
import { StyledHeader } from './styles' 
import { FaPlay } from "react-icons/fa"

export default function Header() {
  return (
    <StyledHeader>
      <div className="container">
        <FaPlay />
        <h1 className="title">Movie Library</h1>
      </div>
    </StyledHeader>
  )
}