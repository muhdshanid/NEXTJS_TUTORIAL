import { NextResponse } from "next/server"

const allowedOrigins = process.env.NODE_ENV === "production"
    ? [ 'https://www.yoursite.com', 'https://yoursite.com']
    : [ 'http://localhost:3000']

export const middleware = async (req: Request) => {

    // const regex = new RegExp('/api/*')

    // if(regex.test(req.url)){
    //     console.log("api route");
        
    // }
    const origin = req.headers.get('origin')

    if(origin && !allowedOrigins.includes(origin)){
        return new NextResponse(null, {
            status: 400,
            statusText: "Bad Request",
            headers: {
                "Content-Type": "text/plain"
            }
        })
    }
 
    console.log('middleware');

    console.log(req.method);
    console.log(req.url);
    

    console.log(origin);

    return NextResponse.next()
    
}

export const config = {
    matcher: '/api/:path*'
}