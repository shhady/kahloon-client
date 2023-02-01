import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css"
export default function Header() {
  return (
    <div className='mainNav'>
      <div className='navRightSide'>
      <Link to="/" style={{textDecoration:"none", color: "black"}}>דף הבית</Link>
      {/* <Link to="/Collections" style={{textDecoration:"none", color: "black"}}>חבילה יומית</Link>
      <Link to="/Attractions" style={{textDecoration:"none", color: "black"}}>אטרקציות</Link> */}
      </div>
      <div>Logo</div>
    </div>
  )
}
