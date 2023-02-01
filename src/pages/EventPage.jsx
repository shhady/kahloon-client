import React , {useState} from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
export default function EventPage() {
    const [test, setTest] = useState("");

    const {id} = useParams()
    useEffect(()=>{
        setTest(id)
    },[id])
  return (
    <div>{test}</div>
  )
}
