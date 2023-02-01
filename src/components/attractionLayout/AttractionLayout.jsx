import React from 'react'
import {Link, Outlet} from "react-router-dom"
import "./AttractionLayout.css"
export default function AttractionLayout() {
  return (
    <div className='attractionsMain'>
       <div className="titleCollectionLayout">
         אטרקציות
          </div>
        <main className="secondNav">
          
        <Link to="/attractions/horses" style={{textDecoration:"none"}}>
        <div className="horsesMainPic">
        <div className="Locationwrapper">
            רכיבת סוסים
            </div>
        </div>
        </Link>
        <Link to="/attractions/atv" style={{textDecoration:"none"}}>
        <div className="atvMainPic">
          <div className="Locationwrapper">
            טרקטרונים
            </div>
        </div>
        </Link>
        <Link to="/attractions/collect" style={{textDecoration:"none"}}>
        <div className="collectMainPic">
        <div className="Locationwrapper">
           קטיף עצמי
        </div>
        </div>
        </Link>
        <Link to="/attractions/jeeps" style={{textDecoration:"none"}}>
        <div className="jeepsMainPic">
        <div className="Locationwrapper">
            טיולי ג'יפים
            </div>
        </div>
        </Link>
        <Link to="/attractions/water" style={{textDecoration:"none"}}>
        <div className="waterMainPic">
          <div className="Locationwrapper">
            ספורט ימי
            </div>
        </div>
        </Link>
        <Link to="/attractions/animals" style={{textDecoration:"none"}}>
        <div className="animalsMainPic">
          <div className="Locationwrapper">
            גני חיות<br/>פינות ליטוף
            </div>
        </div>
        </Link>
        <Link to="/attractions/bicycle" style={{textDecoration:"none"}}>
        <div className="bicycleMainPic">
          <div className="Locationwrapper">
            השכרת אופניים
            </div>
        </div>
        </Link>
        <Link to="/attractions/baloon" style={{textDecoration:"none"}}>
        <div className="baloonMainPic">
          <div className="Locationwrapper">
            כדור פורח
            </div>
        </div>
        </Link>
        </main>
        <Outlet/>
    </div>
  )
}
