import React from 'react'
import {Link, Outlet} from "react-router-dom"
import "./CollectionLayout.css"
export default function CollectionLayout() {
  return (
    <div>
      <div className="titleCollectionLayout">
          יום מלא באווירה רומנטית ואטרקציות עם האהוב עליכם
          </div>
        <main className="secondNav">
          
        <Link to="/collections/north" style={{textDecoration:"none"}}>
        <div className="nothMainPic">
        <div className="Locationwrapper">
            צפון
            </div>
        </div>
        </Link>
        <Link to="/collections/center" style={{textDecoration:"none"}}>
        <div className="HaifaMainPic">
          <div className="Locationwrapper">
            חיפה
            </div>
        </div>
        </Link>
        <Link to="/collections/south" style={{textDecoration:"none"}}>
        <div className="tiberiasMainPic">
        <div className="Locationwrapper">
            טבריה
        </div>
        </div>
        </Link>
        <Link to="/collections/nazareth" style={{textDecoration:"none"}}>
        <div className="nazarethMainPic">
        <div className="Locationwrapper">
            נצרת
            </div>
        </div>
        </Link>
        </main>
        <Outlet/>
    </div>
  )
}
