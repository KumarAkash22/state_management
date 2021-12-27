
import { TodoInput } from "./TodoInput";
import { useState } from "react"
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";
export const Todo = () => {
    const [list, setList] = useState([]);
    const handleClick = (data) => {
    console.log(data)
    const payload = {
        title:data,
        status: false,
        id:nanoid(7)
    }
    setList([...list, payload]);
}
    const handleToggle = (id) => {
        alert("Mark Done")
    }
      
    return (
    <>
    <TodoInput getData = {handleClick}/>
    {list.map((e) => (
        <TodoItem key={e.id} {...e} handleToggle={handleToggle}/>
    ))}
    </>
    )
}