import React,{useState,useEffect} from 'react'

export default function FunctionComponent() {
  const [date,setDate] = useState(new Date());
  useEffect(()=>{
    // 相当于componentDidMount，componentDidupdate，componentDidUnmount
    const timer = setInterval(()=>{
      setDate(new Date())
    },1000)
    return ()=>{clearInterval(timer)}
  },[])
  return (
    <div>{ date.toLocaleTimeString() }</div>
  )
}
