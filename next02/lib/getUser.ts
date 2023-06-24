

export const getUser = async (userId: string) => {

    const URL = `https://jsonplaceholder.typicode.com/users/${userId}`

    const res = await fetch(URL)

    if(!res.ok) throw new Error("failed to fetch user data")

    return res.json()

}