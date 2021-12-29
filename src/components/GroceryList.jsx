export const TodoItem = ({title,status, id, handleToggle})=>{
console.log(title, id)
    return (
        <>
        <div>{title} - {status ? "Done": "Add in Grocery "}
        <button onClick={()=> handleToggle(id)}>Delete</button></div>
        </>
    )
}