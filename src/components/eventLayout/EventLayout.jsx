import React from 'react'
import { Link , Outlet} from 'react-router-dom'
import "./EventLayout.css"
export default function EventLayout() {
  return (
    <>
    <div className="eventsTitle">
         <h2>אירועים</h2>
    </div>
    <div className='eventsHomePage'>
      <Link to="/events/birthday" style={{textDecoration:"none"}}>
        <div className="birthday">יום הולדת</div>
        </Link>
        <Link to="/events/engagement" style={{textDecoration:"none"}}>
        <div className="engagement">אירוסין</div> </Link>
        <Link to="/events/proposal" style={{textDecoration:"none"}}>
        <div className="proposal">הצעת נישואין</div> </Link>
    </div>
    <Outlet/>
    </>
  )
}
