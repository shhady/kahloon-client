import React, { useState, useEffect, Suspense } from "react";
import { Route,Routes } from "react-router-dom";
import Header from "./components/Header/Header"
import NewCollection from "./components/NewCollection"
import NewAttraction from "./components/NewAttraction"
import CollectionLayout from "./components/collectionLayout/CollectionLayout"
import AttractionLayout from "./components/attractionLayout/AttractionLayout"
import MealLayout from "./components/mealLayout/MealLayout"
import EventLayout from "./components/eventLayout/EventLayout"
const Home = React.lazy(() => import("./pages/Home"));
const Collections = React.lazy(() => import("./pages/Collections"));
const Collection = React.lazy(() => import("./pages/Collection"));
const Attractions = React.lazy(() => import("./pages/Attractions"));
const Attraction = React.lazy(() => import("./pages/Attraction"));
const MealsPage = React.lazy(() => import("./pages/MealsPage"));
const MealLocationPage = React.lazy(() => import("./pages/MealLocationPage"));
const EventsPage = React.lazy(() => import("./pages/EventsPage"));
const EventPage = React.lazy(() => import("./pages/EventPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));


function App() {
  return (
   <>
   <Suspense>
   <Header />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/collections" element={<CollectionLayout />}>
    <Route index element={<Collections />}/>
    <Route path=":id" element={<Collection />}/>
    <Route path="new" element={<NewCollection />}/>
    </Route>
    <Route path="/Attractions" element={<AttractionLayout />}>
    <Route index element={<Attractions />}/>
    <Route path=":id" element={<Attraction />}/>
    <Route path="new" element={<NewAttraction />}/>
    </Route>
    <Route path="/meals" element={<MealLayout />}>
    <Route index element={<MealsPage />}/>
    <Route path=":id" element={<MealLocationPage />}/>
    </Route>
    <Route path="/events" element={<EventLayout />}>
    <Route index element={<EventsPage />}/>
    <Route path=":id" element={<EventPage />}/>
    </Route>
    <Route path="*" element={<NotFound />}/>

    </Routes>
    </Suspense>
   </>
  );
}

export default App;
