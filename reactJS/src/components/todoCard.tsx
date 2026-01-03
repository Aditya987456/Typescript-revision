import { useFetch } from "../hooks/useFetch"

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}


export default function TodoCard() {

    const { data, loading, error } = useFetch<Todo>(`https://jsonplaceholder.typicode.com/todos/1`)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return null;

  return (
    <div
      style={{
        color:"#000000",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "8px",
        backgroundColor: "#fafafa"
      }}
    >
      <p><strong>User ID:</strong> {data.userId}</p>
      <p><strong>Todo ID:</strong> {data.id}</p>
      <p><strong>Title:</strong> {data.title}</p>
      <p>
        <strong>Status:</strong>{" "}
        {data.completed ? "✅ Completed" : "⏳ Pending"}
      </p>
    </div>
  )
}
