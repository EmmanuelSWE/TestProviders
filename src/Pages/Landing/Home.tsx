import { useState } from "react"

export const Home = () =>{
    const [name,setName]  = useState('User');

    return <h1> hello {name}</h1>
}