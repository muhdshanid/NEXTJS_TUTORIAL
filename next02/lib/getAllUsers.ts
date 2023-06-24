
export const getAllUsers =async () => {


    const URL = "https://jsonplaceholder.typicode.com/users"
    const res = await fetch(URL)

    if(!res.ok) throw new Error("failed to fetch all users")

    return res.json()
}