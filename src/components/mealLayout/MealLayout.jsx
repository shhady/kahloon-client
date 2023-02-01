import React from 'react'
import { Link , Outlet} from 'react-router-dom'
import "./MealLayout.css"
export default function Meals() {
  return (
    <>
    <div className="mealsTitle">
         <h2>ארוחה רומנטית</h2>
    </div>
    <div className='mealsHomePage'>
      <Link to="/meals/beach" style={{textDecoration:"none"}}>
        <div className="beachMeal">חוף הים</div>
        </Link>
        <Link to="/meals/yacht" style={{textDecoration:"none"}}>
        <div className="yachtMeal">לב הים</div> </Link>
        <Link to="/meals/restaurant" style={{textDecoration:"none"}}>
        <div className="resMeal">מסעדה</div> </Link>
        <Link to="/meals/nature" style={{textDecoration:"none"}}>
        <div className="natureMeal">טבע</div> </Link>
    </div>
    <Outlet/>
    </>
  )
}
