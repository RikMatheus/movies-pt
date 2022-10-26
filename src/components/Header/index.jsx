import React from "react"
import { StyledHeader } from './styles' 

export default function Header() {
  return (
    <StyledHeader>
      <div className="container">
        <h1 className="title">Movie Library</h1>
      </div>
    </StyledHeader>
  )
}