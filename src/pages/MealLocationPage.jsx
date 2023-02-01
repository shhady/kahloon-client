import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function MealLocationPage() {
    const [location, setLocation] = useState('');
    const [menu, setMenu]=useState(null)
    const {id} =useParams()
    useEffect(()=>{
        setLocation(id)
    },[id])

    useEffect(()=>{
        const res = async()=>{
            const data = await axios.get(`http://localhost:8080/meals/${location}`);
            setMenu(data.data)
        }
        res()
    },[location])
    const drawData = ()=>{
    return menu?.map((me)=>{
      return  <div key={me._id} style={{textAlign:"center"}}>
        <div>{me.name}</div>
      <div>{me.price}</div>
      <div>{me.menu.map((meals,i)=>{
        return <div key={i}>{meals.name} {meals.price}</div>
      })}</div>
      </div>
    })
    }

  return (<>
    <div style={{textAlign:"center"}}>{id}</div>
    <div  style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>{drawData()}</div>
    </>
  )
}
