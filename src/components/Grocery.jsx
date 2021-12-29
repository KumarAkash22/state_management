
import { TodoInput } from "./GroceryInput";
import { useState } from "react"
import { TodoItem } from "./GroceryList";
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
        setList((list) => {
        return list.filter((lis) => {
            return id !== lis.id;
            });
          });
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