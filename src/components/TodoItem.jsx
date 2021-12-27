export const TodoItem = ({title,status, id, handleToggle})=>{
console.log(title, id)
    return (
        <>
        <div>{title} - {status ? "Done": "Not Done "}
        <button onClick={()=> handleToggle(id)}>Mark Done</button></div>
        </>
    )
}