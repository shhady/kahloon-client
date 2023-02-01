import React from 'react'
import { useParams } from 'react-router-dom'
export default function MealLocationPage() {
    const {id} =useParams()
  return (
    <div>MealLocationPage {id}</div>
  )
}
