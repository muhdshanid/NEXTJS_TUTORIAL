import { NextResponse } from "next/server"


const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

type Props = {
    params: {
        id: string
    }
}
export const GET = async (req: Request, { params: {id}}: Props) => {

    // const id = req.url.slice(req.url.lastIndexOf("/") + 1)

    const res = await fetch(`${DATA_SOURCE_URL}/${id}`)

    const todo: Todo = await res.json()

    if(!todo.id) return NextResponse.json({message: "Todo not found"})

    return NextResponse.json(todo)
}
