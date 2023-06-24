

export const getUser = async (userId: string) => {

    const URL = `https://jsonplaceholder.typicode.com/users/${userId}`

    const res = await fetch(URL)

    if(!res.ok) return undefined

    return res.json()

}