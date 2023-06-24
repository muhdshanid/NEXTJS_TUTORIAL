

export const getUserPosts = async (userId: string) => {

    const URL = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`

    const res = await fetch(URL)

    if(!res.ok) throw new Error("failed to fetch user posts")

    return res.json()

}