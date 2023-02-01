import React from 'react'
import "./Home.css"
import Hero from "../components/Hero"
import MealLayout from "../components/mealLayout/MealLayout"
import CollectionLayout from "../components/collectionLayout/CollectionLayout"
import AttractionLayout from "../components/attractionLayout/AttractionLayout"
import EventLayout from "../components/eventLayout/EventLayout"
export default function Home() {
  return (
    <>
    <Hero /> 
    <EventLayout/>
    <CollectionLayout />
    <MealLayout />
    <AttractionLayout />
    </>
  )
}
