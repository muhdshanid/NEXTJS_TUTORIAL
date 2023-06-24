

export const getUserPosts = async (userId: string) => {

    const URL = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`

    const res = await fetch(URL, { next: { revalidate: 60 } })

    if(!res.ok) return undefined

    return res.json()

}