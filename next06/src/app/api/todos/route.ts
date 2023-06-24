import { NextResponse } from "next/server"


const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"
const API_KEY: string = process.env.DATA_API_KEY as string

export const GET = async (req: Request) => {

    const origin = req.headers.get("origin")

    const res = await fetch(DATA_SOURCE_URL)

    const todos: Todo[] = await res.json()

    return  new NextResponse(JSON.stringify(todos),{
        headers: {
            'Access-Control-Allow-Origin': origin ||  "*",
            'Content-Type': 'application/json'
 
        }
    })
}

export const DELETE = async (request: Request) => {
    
    const {id}: Partial<Todo> = await request.json()

    if(!id) return NextResponse.json({ message: "Todo is required"})

    await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        }
    })

    // return NextResponse.json({ message: `Todo deleted successfully`})
    return NextResponse.json({ message: `Todo ${id} deleted successfully`})
}
export const POST = async (request: Request) => {
    
    const {userId, title}: Partial<Todo> = await request.json()

    if(!userId || !title) return NextResponse.json({ message: "Missing required data"})

    const res = await fetch(DATA_SOURCE_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        },
        body: JSON.stringify({
            userId,title,completed:false
        })
    })
 
    const newTodo = await res.json()

    return NextResponse.json(newTodo)
}

export const PUT = async (request: Request) => {
    
    const {id, completed, userId, title}: Todo = await request.json()

    if(!userId || !title || !id || typeof(completed) !== "boolean") return NextResponse.json({ message: "Missing required data"})

    const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY
        },
        body: JSON.stringify({
            userId,title,completed
        })
    })

    const updatedTodo = await res.json()

    return NextResponse.json(updatedTodo)
}


